import GeneralHeader from "@/components/common/generalHeader/index";
import { useEffect, useState } from "react";
import AddPlacePage from "../addPlace/AddPlacePage";
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
// import { useGetPlan } from "@/apis/myTrip/myTrip.queries";
import * as S from "./styles";
import { daysAtom, daysInitAtom, islandIdAtom, useUpdateDaysAtom } from "@/atoms/myTrip/planAtom";
import { differenceInCalendarDays, parseISO } from "date-fns";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import { Day, Place } from "@/types/myTrip";
import { useAddPlace, useDeletePlace, useUpdatePlace } from "@/apis/myTrip/myTrip.queries";
import { differenceWith, sortBy } from "lodash";

const PlanPage = () => {
  const [day, setDay] = useState(1);
  const [isPageEditing, setIsPageEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { generated } = location.state || { generated: false };

  const { tripId } = useParams<{ tripId: string }>();
  // const { planName, islandName, startDate, endDate, travelPlaceList } = useGetPlan({ planId: parseInt(tripId) });
  const planName = "효도 여행";
  const islandName = "울릉도";
  const startDate = "2024-09-13";
  const endDate = "2024-09-15";
  const travelPlaceList = [
    {
      id: 1,
      name: "장소2",
      address: "주소",
      x_address: "126.795851",
      y_address: "33.55645",
      category: "숙박",
      date: "2024-09-14",
      order: 2,
      imgUrl: ""
    },
    {
      id: 2,
      name: "장소1",
      address: "주소",
      x_address: "126.795841",
      y_address: "33.55635",
      category: "숙박",
      date: "2024-09-14",
      order: 1,
      imgUrl: ""
    },
    {
      id: 3,
      name: "장소",
      address: "주소",
      x_address: "126.795841",
      y_address: "33.55635",
      category: "숙박",
      date: "2024-09-15",
      order: 1,
      imgUrl: ""
    },
    {
      id: 4,
      name: "장소",
      address: "주소",
      x_address: "126.795841",
      y_address: "33.55635",
      category: "숙박",
      date: "2024-09-13",
      order: 1,
      imgUrl: ""
    }
  ];

  const [, initializeDays] = useAtom(daysInitAtom);
  const [days] = useAtom(daysAtom);
  const addPlacesToDay = useUpdateDaysAtom();
  const [, setIslandId] = useAtom(islandIdAtom);

  const [positionList, setPositionList] = useState([]);
  const [position, setPosition] = useState<{ lat: string; lng: string }>();

  const addMutation = useAddPlace();
  const deleteMutation = useDeletePlace();
  const updateMutation = useUpdatePlace();

  useEffect(() => {
    if (days.length > 0) return;
    initializeDays({ startDate, endDate });

    travelPlaceList
      .sort((a, b) => a.order - b.order)
      .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
      .map((place) => {
        const placeDate = parseISO(place.date);
        const start = parseISO(startDate);
        const dayNumber = differenceInCalendarDays(placeDate, start) + 1;
        addPlacesToDay(dayNumber, [place]);
      });
  }, [startDate, endDate, initializeDays, travelPlaceList]);

  useEffect(() => {
    if (positionList.length) return;
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(islandName, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPosition({ lat: data[0].y, lng: data[0].x });
      }
    });
  }, [positionList]);

  useEffect(() => {
    const islandId = ISLAND_LIST.find((island) => island.name === islandName)?.id;
    if (!islandId) return;
    setIslandId(islandId);
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onAdd = () => {
    setIsAdding(true);
  };

  const onPageEdit = () => {
    setIsPageEditing(true);
  };

  const onEdit = () => {
    setIsEditing(true);
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
        order: order++
      }));
      editedPlaces.push(...placeWithOrder);
    });

    console.log(originalPlaces);
    console.log(editedPlaces);

    const differences = getDifferences(originalPlaces, editedPlaces);
    console.log(differences);
    if (!differences.length) {
      setIsPageEditing(false);
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

    console.log(addedPlaces);
    console.log(removedPlaces);

    // 추가된 장소 처리
    try {
      for (const place of addedPlaces) {
        if (!tripId || !place.id || !place.date) return;
        await addMutation.mutateAsync({
          travelPlanId: parseInt(tripId),
          businessId: place.id,
          date: place.date
        });
      }

      // 삭제된 장소 처리
      for (const place of removedPlaces) {
        await deleteMutation.mutateAsync({
          travelPlaceId: place.id
        });
      }

      // 장소 순서 변경 처리
      const editedPlaceData: any[] = editedPlaces.map((place) => ({
        travelPlaceId: place.id,
        order: place.order,
        date: place.date
      }));
      await updateMutation.mutateAsync(editedPlaceData);
    } catch (error) {
      console.log("수정 실패");
      setIsPageEditing(false);
    }

    setIsPageEditing(false);
  };

  const handleMore = () => {
    setShowDelete(true);
  };

  const handleClose = () => {
    // 수정 중인 일정 삭제
    if (isPageEditing && !showCloseModal) {
      setShowCloseModal(true);
    } else if (generated) {
      navigate(PATH.MY_TRIP_LIST);
    } else navigate(-1);
  };

  const handleDelete = () => {
    // 일정 삭제하기
    navigate(PATH.MY_TRIP_LIST);
  };

  const onPrev = () => {
    isAdding && setIsAdding(false);
    isEditing && setIsEditing(false);
  };

  return (
    <>
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
      {!isEditing && !isAdding && (
        <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
          {generated && <AnimatePresence>{showToast && <Toast message={"일정 생성 완료!"} />}</AnimatePresence>}
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
            selectedDay={day}
            isPageEditing={isPageEditing}
            onPageEdit={onPageEdit}
            onAdd={onAdd}
            onEdit={onEdit}
            onPageEditDone={onPageEditDone}
            onSelect={(day: number) => setDay(day)}
            setPositionList={setPositionList}
          />
        </div>
      )}
      {isAdding && <AddPlacePage onPrev={onPrev} day={day} planName={planName} />}
      {isEditing && <EditPlanPage onPrev={onPrev} />}
      <BottomSheet isOpen={showDelete} close={() => setShowDelete(false)}>
        <S.BottomSheetContainer>
          <S.Delete
            onClick={() => {
              setShowDelete(false);
              setShowDeleteModal(true);
            }}
          >
            삭제하기
          </S.Delete>
        </S.BottomSheetContainer>
      </BottomSheet>
      <SimpleModal
        image="/src/assets/images/warning.svg"
        title="일정을 정말 삭제할까요?"
        content="삭제한 일정은 되돌릴 수 없어요"
        firstButtonText="취소"
        secondButtonText="삭제하기"
        firstButtonOnClick={() => setShowDeleteModal(false)}
        secondButtonOnClick={handleDelete}
        isOpen={showDeleteModal}
        close={() => setShowDeleteModal(false)}
      />
      <SimpleModal
        image="/src/assets/images/warning.svg"
        title="정말 나가시겠습니까?"
        content="지금까지 수정된 일정이 전부 지워집니다!"
        firstButtonText="취소"
        secondButtonText="나가기"
        firstButtonOnClick={() => setShowCloseModal(false)}
        secondButtonOnClick={handleClose}
        isOpen={showCloseModal}
        close={() => setShowCloseModal(false)}
      />
    </>
  );
};

export default PlanPage;
