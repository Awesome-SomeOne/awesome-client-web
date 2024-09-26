import GeneralHeader from "@/components/common/generalHeader/index";
import { useEffect, useState } from "react";
import AddPlacePage from "@/pages/myTrip/addPlace/AddPlacePage";
import MapComponent from "@/components/myTrip/map/index";
import { AnimatePresence } from "framer-motion";
import Toast from "@/components/myTrip/toast/index";
import Appbar from "@/components/common/header/Appbar";
import { useNavigate, useLocation } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import { PATH } from "@/constants/path";
import Plan from "@/components/myTrip/plan/index";
import EditPlanPage from "../editPlan/EditPlanPage";
import SimpleModal from "@/components/common/simpleModal/index";
import MoreIcon from "@/assets/icons/MoreIcon";
import BottomSheet from "@/components/common/bottomSheet/index";
import { Map } from "react-kakao-maps-sdk";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import * as S from "./styles";
import { daysAtom, daysInitAtom, islandIdAtom, useUpdateDaysAtom } from "@/atoms/myTrip/planAtom";
import { differenceInCalendarDays, parseISO } from "date-fns";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import { Day, Place } from "@/types/myTrip";
import { useGetPlan, useAddPlace, useDeletePlace, useUpdatePlace, useDeleteTravel } from "@/apis/myTrip/myTrip.queries";
import { differenceWith, sortBy } from "lodash";
import { Suspense } from "react";
import ErrorBoundary from "@/hooks/Errorboundary";

const PlanContent = () => {
  const [day, setDay] = useState(1);
  const [pageState, setPageState] = useState({
    isAdding: false,
    isEditing: false,
    isPageEditing: false,
    showToast: false,
    showFailureToast: false,
    showDelete: false,
    showDeleteModal: false,
    showCloseModal: false
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { generated } = location.state || { generated: false };

  const { tripId } = useParams<{ tripId: string }>();
  const { data: planData } = useGetPlan({ planId: parseInt(tripId as string) });
  const { startDate, endDate, islandName, travelPlaceList, planName, temperature } = planData || {};

  const [, initializeDays] = useAtom(daysInitAtom);
  const [days] = useAtom(daysAtom);
  const addPlacesToDay = useUpdateDaysAtom();
  const [, setIslandId] = useAtom(islandIdAtom);

  const [positionList, setPositionList] = useState([]);
  const [position, setPosition] = useState<{ lat: string; lng: string }>();

  const { mutateAsync: addPlace } = useAddPlace();
  const { mutateAsync: deletePlace } = useDeletePlace();
  const { mutateAsync: updatePlace } = useUpdatePlace();
  const { mutateAsync: deletePlan } = useDeleteTravel();

  const initializePlacesInDays = (places: Place[], startDate: string) => {
    places
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return parseISO(a.date).getTime() - parseISO(b.date).getTime();
      })
      .map((place) => {
        const placeDate = place.date && parseISO(place.date);
        const start = parseISO(startDate);
        const dayNumber = placeDate && differenceInCalendarDays(placeDate, start) + 1;
        dayNumber && addPlacesToDay(dayNumber, [place]);
      });
  };

  const searchIslandPosition = (islandName: string) => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(islandName, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPosition({ lat: data[0].y, lng: data[0].x });
      }
    });
  };

  useEffect(() => {
    if (startDate && endDate && !days.length) {
      initializeDays({ startDate, endDate });
    }
    initializePlacesInDays(travelPlaceList, startDate);
  }, [travelPlaceList, startDate, endDate, initializeDays]);

  useEffect(() => {
    if (islandName && !positionList.length) {
      searchIslandPosition(islandName);
    }
  }, [islandName, positionList]);

  useEffect(() => {
    if (!islandName) return;
    const islandId = ISLAND_LIST.find((island) => island.name === islandName)?.id;
    islandId && setIslandId(islandId);
    setPageState((prev) => ({ ...prev, showToast: true }));
    const timer = setTimeout(() => setPageState((prev) => ({ ...prev, showToast: false })), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [islandName]);

  useEffect(() => {
    if (!pageState.showFailureToast) return;
    const timer = setTimeout(() => setPageState((prev) => ({ ...prev, showFailureToast: false })), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [pageState.showFailureToast]);

  const onAdd = () => {
    setPageState((prev) => ({ ...prev, isAdding: true }));
  };

  const onPageEdit = () => {
    setPageState((prev) => ({ ...prev, isPageEditing: true }));
  };

  const onEdit = () => {
    setPageState((prev) => ({ ...prev, isEditing: true }));
  };

  const sortPlaces = (places: Place[]) => sortBy(places, ["id", "date", "order"]);

  const getDifferences = (original: Place[], updated: Place[]) => {
    const sortedOriginal = sortPlaces(original);
    const sortedUpdated = sortPlaces(updated);

    return differenceWith(
      sortedUpdated,
      sortedOriginal,
      (a: Place, b: Place) => a.id === b.id && a.date === b.date && a.order === b.order
    );
  };

  const onPageEditDone = async () => {
    // 수정된 일정 저장
    const originalPlaces = [...travelPlaceList];
    const editedPlaces: Place[] = [];
    days.map((day: Day) => {
      let order = 1;
      const places = day.places;
      const placeWithOrder = places.map((place) => ({
        ...place,
        order: order++,
        date: day.date
      }));
      editedPlaces.push(...placeWithOrder);
    });

    const differences = getDifferences(originalPlaces, editedPlaces);
    console.log("변경된 것 --- ");
    console.log(differences);
    if (!differences.length) {
      setPageState((prev) => ({ ...prev, isPageEditing: false }));
      return;
    }

    // 추가된 장소 필터링
    const addedPlaces = editedPlaces.filter(
      (newPlace) => !originalPlaces.some((originalPlace) => originalPlace.id === newPlace.id)
    );

    // 삭제된 장소 필터링
    const removedPlaces = originalPlaces.filter(
      (originalPlace) => !editedPlaces.some((newPlace) => newPlace.id === originalPlace.id)
    );

    console.log("추가된 장소 --- ");
    console.log(addedPlaces);
    console.log("삭제된 장소 ---");
    console.log(removedPlaces);

    // 추가된 장소 처리
    try {
      for (const place of addedPlaces) {
        if (!tripId || !place.id || !place.date) return;
        await addPlace({
          travelPlanId: parseInt(tripId),
          businessId: place.id,
          date: place.date
        });
      }

      // 삭제된 장소 처리
      for (const place of removedPlaces) {
        await deletePlace({
          travelPlaceId: place.id
        });
      }

      // 장소 순서 변경 처리
      const editedPlaceData: any[] = editedPlaces.map((place) => ({
        travelPlaceId: place.id,
        order: place.order,
        date: place.date
      }));
      await updatePlace(editedPlaceData);
      setPageState((prev) => ({ ...prev, isPageEditing: false }));
      window.location.reload();
    } catch (error) {
      setPageState((prev) => ({ ...prev, showFailureToast: true }));
    }
  };

  const handleMore = () => {
    setPageState((prev) => ({ ...prev, showDelete: true }));
  };

  const handleClose = () => {
    if (pageState.isPageEditing && !pageState.showCloseModal) {
      setPageState((prev) => ({ ...prev, showCloseModal: true }));
    } else if (generated) {
      navigate(PATH.MY_TRIP_LIST);
    } else navigate(-1);
  };

  const handleDelete = () => {
    if (!tripId) return;
    deletePlan(
      {
        planId: parseInt(tripId)
      },
      {
        onSuccess: () => navigate(PATH.MY_TRIP_LIST)
      }
    );
  };

  const onPrev = () => {
    pageState.isAdding && setPageState((prev) => ({ ...prev, isAdding: false }));
    pageState.isEditing && setPageState((prev) => ({ ...prev, isEditing: false }));
  };

  return (
    <>
      <AnimatePresence>{pageState.showFailureToast && <Toast message={"일정 수정 실패"} />}</AnimatePresence>
      <Appbar
        title=""
        textAlign="center"
        rightIcon1={
          <button onClick={handleMore}>
            <MoreIcon size="28" />
          </button>
        }
        rightIcon2={
          <button onClick={handleClose}>
            <ClearIcon size="28" />
          </button>
        }
      />
      {!pageState.isEditing && !pageState.isAdding && (
        <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
          {generated && (
            <AnimatePresence>{pageState.showToast && <Toast message={"일정 생성 완료!"} />}</AnimatePresence>
          )}
          <GeneralHeader title={islandName} sub={`${startDate} ~ ${endDate}`} titleSize="md" />
          {positionList.length ? (
            <MapComponent positionList={positionList} />
          ) : (
            position && (
              <Map
                center={{ lat: parseFloat(position.lat) - 0.033, lng: parseFloat(position.lng) }}
                style={{ width: "100%", height: "100%" }}
                level={10}
              ></Map>
            )
          )}
          <Plan
            daysList={days}
            positionList={positionList}
            startDate={startDate}
            endDate={endDate}
            temperature={temperature}
            selectedDay={day}
            isPageEditing={pageState.isPageEditing}
            onPageEdit={onPageEdit}
            onAdd={onAdd}
            onEdit={onEdit}
            onPageEditDone={onPageEditDone}
            onSelect={(day: number) => setDay(day)}
            setPositionList={setPositionList}
          />
        </div>
      )}
      {pageState.isAdding && <AddPlacePage onPrev={onPrev} day={day} planName={planName} />}
      {pageState.isEditing && <EditPlanPage onPrev={onPrev} />}
      <BottomSheet isOpen={pageState.showDelete} close={() => setPageState((prev) => ({ ...prev, showDelete: false }))}>
        <S.BottomSheetContainer>
          <S.Delete
            onClick={() => {
              // setShowDelete(false);
              // setShowDeleteModal(true);
              setPageState((prev) => ({ ...prev, showDelete: false, showDeleteModal: true }));
            }}
          >
            삭제하기
          </S.Delete>
        </S.BottomSheetContainer>
      </BottomSheet>
      <SimpleModal
        image="/images/warning.svg"
        title="일정을 정말 삭제할까요?"
        content="삭제한 일정은 되돌릴 수 없어요"
        firstButtonText="취소"
        secondButtonText="삭제하기"
        firstButtonOnClick={() => setPageState((prev) => ({ ...prev, showDeleteModal: false }))}
        secondButtonOnClick={handleDelete}
        isOpen={pageState.showDeleteModal}
        close={() => setPageState((prev) => ({ ...prev, showDeleteModal: false }))}
      />
      <SimpleModal
        image="/images/warning.svg"
        title="정말 나가시겠습니까?"
        content="지금까지 수정된 일정이 전부 지워집니다!"
        firstButtonText="취소"
        secondButtonText="나가기"
        firstButtonOnClick={() => setPageState((prev) => ({ ...prev, showCloseModal: false }))}
        secondButtonOnClick={handleClose}
        isOpen={pageState.showCloseModal}
        close={() => setPageState((prev) => ({ ...prev, showCloseModal: false }))}
      />
    </>
  );
};

const PlanPage = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(PATH.ROOT);
  };

  return (
    <>
      <ErrorBoundary
        fallback={
          <>
            <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
              <Appbar
                title=""
                textAlign="center"
                rightIcon1={
                  <button onClick={handleClose}>
                    <ClearIcon size="28" />
                  </button>
                }
              />
              에러 발생
            </div>
          </>
        }
      >
        <Suspense fallback={<>로딩중...</>}>
          <PlanContent />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default PlanPage;
