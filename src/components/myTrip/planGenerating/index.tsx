import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddBox from "../box/addBox/index";
import { useAddPlaces, useGeneratePlan } from "@/apis/myTrip/myTrip.queries";
import { daysAtom, daysInitAtom, planAtom, recommendedPlacesAtom, useUpdateDaysAtom } from "@/atoms/myTrip/planAtom";
import BottomSheet from "@/components/common/bottomSheet/index";
import Button from "@/components/common/button/index";
import Chip from "@/components/common/chip/index";
import SimpleModal from "@/components/common/simpleModal/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { PATH } from "@/constants/path";
import useOverlay from "@/hooks/useOverlay";
import { Place } from "@/types/myTrip";
import { calculateDistance, getDaysArray } from "@/utils/myTrip/myTrip.utils";

import PlaceBox from "../box/placeBox/index";
import MiniMapComponent from "../map/miniMap/index";
import * as S from "./styles";

interface IPlanProps {
  selectedDay: number;
  onAdd: () => void;
  onEdit: () => void;
  onSelect: (day: number) => void;
}

const PlanGenerating = ({ selectedDay, onAdd, onEdit, onSelect }: IPlanProps) => {
  const [{ islandId, startDate, endDate, planName }] = useAtom(planAtom);
  const [, initializeDays] = useAtom(daysInitAtom);
  const [days, setDays] = useAtom(daysAtom);
  const daysArray = getDaysArray(days.length - 1);
  const navigate = useNavigate();
  const { mutateAsync: generatePlan } = useGeneratePlan();
  const { mutateAsync: addManyPlace } = useAddPlaces();

  const { isOpen, open, close } = useOverlay();

  // Day별 일정
  const [travelPlaceList, setTravelPlaceList] = useState<Place[]>([]);
  // 추천 장소 중 선택한 장소
  const [recommendedPlaces, setRecommendedPlaces] = useAtom(recommendedPlacesAtom);
  // 선택한 장소 중 클릭한 장소
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  // 모달에서 선택된 Day
  const [selectedBottomSheetDay, setSelectedBottomSheetDay] = useState(daysArray[selectedDay - 1]);
  const [modalOpen, setModalOpen] = useState(false);

  const addPlacesToDay = useUpdateDaysAtom();

  useEffect(() => {
    if (days.length > 0) return;
    initializeDays({ startDate, endDate });
  }, [startDate, endDate, initializeDays]);

  // Day 일정 불러오기
  useEffect(() => {
    if (days.length > 0) {
      setTravelPlaceList(days[selectedDay - 1].places);
    }
  }, [days, selectedDay]);

  useEffect(() => {
    if (selectedPlace) {
      open();
    }
  }, [selectedPlace]);

  // 스크롤에 따른 height 변경
  const [minHeight, setMinHeight] = useState("120px");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const [height, setHeight] = useState(minHeight);
  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    if (latest > 0.1) {
      setHeight("100%");
    } else {
      setHeight(minHeight);
    }
  });

  useEffect(() => {
    if (travelPlaceList.length) {
      setMinHeight("152px");
    } else setMinHeight("120px");
  }, [travelPlaceList]);

  useEffect(() => {
    setHeight(minHeight);
  }, [minHeight]);

  // Day 변경시
  const handleDayClick = (event: any) => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
    const day = parseInt(event.target.innerText.slice(4));
    onSelect(day);
  };

  const addPlaces = async (tripId: number) => {
    for (const day of days) {
      if (!day.places.length) continue;
      try {
        await addManyPlace({
          travelPlanId: tripId,
          businessIds: day.places.map((place: Place) => place.id),
          date: day.date
        });
      } catch (error) {
        window.location.reload();
      }
    }
  };

  // 일정 생성하기 버튼 클릭 시
  const handleGenerate = async () => {
    if (recommendedPlaces?.length) {
      setModalOpen(true);
    } else {
      if (!islandId || !startDate || !endDate || !planName) {
        return;
      }
      // 일정 생성하기 > tripId 받기 > 페이지 이동하기
      try {
        const data = await generatePlan({ islandId, startDate, endDate, planName });
        const { islandId: tripId } = data;

        await addPlaces(tripId);
        setDays([]);
        navigate({ pathname: PATH.MY_TRIP(tripId) }, { state: { generated: true } });
      } catch (error) {
        window.location.reload();
      }
    }
  };

  // 추천 장소 chip 클릭 시
  const handleChipClick = (place: Place) => {
    setSelectedPlace(place);
    setSelectedBottomSheetDay(daysArray[selectedDay - 1]);
  };

  const handleCancelAddPlace = () => {
    setSelectedPlace(undefined);
    close();
  };

  // 추천 장소 추가
  const handleAddPlace = () => {
    if (!selectedPlace) return;

    // 선택한 Day에 장소 추가하기
    addPlacesToDay(parseInt(selectedBottomSheetDay.slice(4)), [selectedPlace]);

    // 선택한 장소 목록(chip 목록)에서 제거하기
    const filtered = recommendedPlaces.filter((place: Place) => place !== selectedPlace);
    setRecommendedPlaces(filtered);

    // 초기화
    setSelectedPlace(undefined);
    const day = parseInt(selectedBottomSheetDay.slice(4));
    onSelect(day);
    close();
  };

  const handleSecondButtonClick = async () => {
    setModalOpen(false);
    setRecommendedPlaces([]);
    // 일정 생성하기 > tripId 받기 > 페이지 이동하기
    const data = await generatePlan({ islandId, startDate, endDate, planName });
    const { islandId: tripId } = data;

    await addPlaces(tripId);
    setDays([]);
    navigate({ pathname: PATH.MY_TRIP(tripId) }, { state: { generated: true } });
  };

  return (
    <>
      <S.BottomSection recommended={recommendedPlaces.length > 0}>
        {recommendedPlaces?.length > 0 && (
          <S.ChipsContainer>
            {recommendedPlaces.map((place: Place, index: number) => (
              <Chip
                key={index}
                text={place.name}
                leadingIcon={
                  <img src={place.imgUrl} style={{ width: "24px", height: "24px", borderRadius: "999px" }} />
                }
                trailingIcon={
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5713 8.76125H8.76174V12.5708C8.76174 12.9898 8.41888 13.3327 7.99984 13.3327C7.58079 13.3327 7.23793 12.9898 7.23793 12.5708V8.76125H3.42841C3.00936 8.76125 2.6665 8.4184 2.6665 7.99935C2.6665 7.5803 3.00936 7.23744 3.42841 7.23744H7.23793V3.42792C7.23793 3.00887 7.58079 2.66602 7.99984 2.66602C8.41888 2.66602 8.76174 3.00887 8.76174 3.42792V7.23744H12.5713C12.9903 7.23744 13.3332 7.5803 13.3332 7.99935C13.3332 8.4184 12.9903 8.76125 12.5713 8.76125Z"
                      fill="#737F8C"
                    />
                  </svg>
                }
                onChipClick={() => handleChipClick(place)}
              />
            ))}
          </S.ChipsContainer>
        )}
        <TabAnatomy
          tabs={daysArray}
          selectedTab={daysArray[selectedDay - 1]}
          onClick={handleDayClick}
          style={{ background: "#fff" }}
        />
        <S.PlaceContainer ref={ref} animate={{ height: height }}>
          <S.Row>
            <S.Info>
              <S.Date>{days[selectedDay - 1]?.date}</S.Date>
              <S.Weather>32℃ 맑음</S.Weather>
            </S.Info>
            {travelPlaceList.length > 0 && <S.TextButton onClick={onEdit}>장소 편집</S.TextButton>}
          </S.Row>
          {travelPlaceList.length === 0 && (
            <div style={{ display: "flex", gap: "4px" }}>
              <AddBox onClick={onAdd} />
            </div>
          )}
          {travelPlaceList.map((place, index) => (
            <div key={index}>
              <PlaceBox order={index + 1} place={place} />
              {index < travelPlaceList.length - 1 && travelPlaceList.length > 1 && (
                <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "18px" }}>
                  {calculateDistance(
                    parseFloat(travelPlaceList[index].y_address),
                    parseFloat(travelPlaceList[index].x_address),
                    parseFloat(travelPlaceList[index + 1].y_address),
                    parseFloat(travelPlaceList[index + 1].x_address)
                  )}
                  m
                </p>
              )}
              {index === travelPlaceList.length - 1 && (
                <div style={{ display: "flex", gap: "4px", height: "96px" }}>
                  <div style={{ width: "24px", textAlign: "center", padding: "8px 0 56px 0" }}>
                    <S.IconContainer bgUrl={`/icons/placeIcon${index + 2}.svg`}>
                      <S.NumberCircle>{index + 2}</S.NumberCircle>
                    </S.IconContainer>
                  </div>
                  <AddBox onClick={onAdd} />
                </div>
              )}
            </div>
          ))}
        </S.PlaceContainer>
        <div style={{ background: "#fff" }}>
          <Button
            text="생성하기"
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
            size="lg"
            onClick={handleGenerate}
          />
        </div>
      </S.BottomSection>
      {recommendedPlaces && selectedPlace && (
        <BottomSheet isOpen={isOpen} close={close}>
          <S.BottomSheetTopContainer>
            <S.Title>어느 일정에 등록할까요?</S.Title>
            <Chip
              text={selectedPlace?.name}
              leadingIcon={
                <img src={selectedPlace?.imgUrl} style={{ width: "24px", height: "24px", borderRadius: "999px" }} />
              }
              style={{ cursor: "default" }}
            />
            <div style={{ borderRadius: "8px", overflow: "hidden" }}>
              <MiniMapComponent
                position={{ lat: parseFloat(selectedPlace.y_address), lng: parseFloat(selectedPlace.x_address) }}
              />
            </div>
          </S.BottomSheetTopContainer>
          <S.DaysUl>
            {daysArray.map((day, index) => (
              <S.DayLi
                key={index}
                selected={day === selectedBottomSheetDay}
                onClick={() => setSelectedBottomSheetDay(day)}
              >
                {day}
              </S.DayLi>
            ))}
          </S.DaysUl>
          <S.DayButtonContainer>
            <Button text="취소" size="lg" isTertiaryButton onClick={handleCancelAddPlace} />
            <Button size="lg" text="선택 완료" onClick={handleAddPlace} />
          </S.DayButtonContainer>
        </BottomSheet>
      )}
      {recommendedPlaces && (
        <SimpleModal
          image="/images/warning.svg"
          title="일정에 넣지 않은 추천 장소가 있어요"
          content="일정에 추가하지 않으면 사라져요! 그래도 생성하시겠습니까?"
          firstButtonText="취소"
          secondButtonText="생성하기"
          firstButtonOnClick={() => setModalOpen(false)}
          secondButtonOnClick={handleSecondButtonClick}
          isOpen={modalOpen}
          close={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default PlanGenerating;
