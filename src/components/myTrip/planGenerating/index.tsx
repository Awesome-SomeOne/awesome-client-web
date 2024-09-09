import BottomSheet from "@/components/common/bottomSheet/index";
import Button from "@/components/common/button/index";
import Chip from "@/components/common/chip/index";
import SimpleModal from "@/components/common/simpleModal/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import useOverlay from "@/hooks/useOverlay";
import * as S from "./styles";
import { useEffect } from "react";
import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import AddBox from "../box/addBox/index";
import PlaceBox from "../box/placeBox/index";
import { PlaceType } from "@/pages/myTrip/editPlan/EditPlanPage";
import MiniMapComponent from "../map/miniMap/index";

interface IPlanProps {
  selectedDay: number;
  recommended: PlaceType[];
  onAdd: () => void;
  onEdit: () => void;
  onSelect: (day: number) => void;
}

const PlanGenerating = ({ selectedDay, recommended, onAdd, onEdit, onSelect }: IPlanProps) => {
  // daysArray 만들기 -> index가 1,2,3... 날짜가 date
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11"];

  const navigate = useNavigate();

  const { isOpen, open, close } = useOverlay();

  // Day별 일정 불러오기
  const [travelPlaceList, setTravelPlaceList] = useState<PlaceType[]>([
    // {
    //   name: "산선암",
    //   type: "관광명소",
    //   address: "경상북도 울릉도"
    // },
    // {
    //   name: "산선암",
    //   type: "관광명소",
    //   address: "경상북도 울릉도"
    // }
  ]);

  // 추천 장소
  const [recommendedPlaces, setRecommendedPlaces] = useState<PlaceType[]>(recommended);
  // 추천 장소 중 선택한 장소
  const [selectedPlace, setSelectedPlace] = useState<PlaceType | null>(null);
  // 모달에서 선택된 Day
  const [selectedBottomSheetDay, setSelectedBottomSheetDay] = useState(days[selectedDay - 1]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (selectedPlace) {
      open();
    }
  }, [selectedPlace]);

  // 스크롤에 따른 height 변경
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const [height, setHeight] = useState("152px");
  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    if (latest > 0.1) {
      setHeight("100%");
    } else {
      setHeight("152px");
    }
  });

  // Day 변경시
  const handleDayClick = (event: any) => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }
    // setSelectedDay(event.target.innerText);
    const day = parseInt(event.target.innerText.slice(4));
    onSelect(day);

    // 해당 Day의 일정 불러오기
    setTravelPlaceList([
      {
        id: 1,
        name: "산선암",
        type: "관광명소",
        address: "경상북도 울릉도"
      },
      {
        id: 2,
        name: "산선암",
        type: "관광명소",
        address: "경상북도 울릉도"
      },
      {
        id: 3,
        name: "산선암",
        type: "관광명소",
        address: "경상북도 울릉도"
      }
    ]);
  };

  // 일정 생성하기 버튼 클릭 시
  const handleGenerate = () => {
    if (recommendedPlaces?.length) {
      setModalOpen(true);
    } else {
      // 일정 생성하기 > tripId 받기 > 페이지 이동하기
      navigate({ pathname: PATH.MY_TRIP(1) }, { state: { generated: true } });
    }
  };

  // 추천 장소 chip 클릭 시
  const handleChipClick = (place: PlaceType) => {
    setSelectedPlace(place);
    setSelectedBottomSheetDay(days[selectedDay - 1]);
  };

  const handleCancelAddPlace = () => {
    setSelectedPlace(null);
    close();
  };

  // 추천 장소 추가
  const handleAddPlace = () => {
    // 선택한 Day에 장소 추가하기

    // chip 목록에서 제거하기
    const filtered = recommendedPlaces.filter((place) => place !== selectedPlace);
    setRecommendedPlaces(filtered);

    // 초기화
    setSelectedPlace(null);
    const day = parseInt(selectedBottomSheetDay.slice(4));
    onSelect(day);
    close();
  };

  const handleSecondButtonClick = () => {
    setModalOpen(false);
    setRecommendedPlaces([]);
    // 일정 생성하기 > tripId 받기 > 페이지 이동하기
    navigate({ pathname: PATH.MY_TRIP(1) }, { state: { generated: true } });
  };

  return (
    <>
      <S.BottomSection>
        {recommendedPlaces?.length > 0 && (
          <S.ChipsContainer>
            {recommendedPlaces.map((place, index) => (
              <Chip
                key={index}
                text={place.name}
                leadingIcon={<img src={place.image} style={{ width: "24px", height: "24px", borderRadius: "999px" }} />}
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
          tabs={days}
          selectedTab={days[selectedDay - 1]}
          onClick={handleDayClick}
          style={{ background: "#fff" }}
        />
        <S.PlaceContainer ref={ref} animate={{ height: height }}>
          <S.Row>
            <S.Info>
              <S.Date>2024.06.28</S.Date>
              <S.Weather>32℃ 맑음</S.Weather>
            </S.Info>
            <S.TextButton onClick={onEdit}>장소 편집</S.TextButton>
          </S.Row>
          {travelPlaceList.length === 0 && (
            <div style={{ display: "flex", gap: "4px" }}>
              <AddBox onClick={onAdd} />
            </div>
          )}
          {travelPlaceList.map((place, index) => (
            <div key={index}>
              <PlaceBox order={index + 1} place={place} />
              {index < travelPlaceList.length - 1 && (
                <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "18px" }}>{512}m</p>
              )}
              {index === travelPlaceList.length - 1 && (
                <div style={{ display: "flex", gap: "4px", height: "96px" }}>
                  <div style={{ width: "24px", textAlign: "center", padding: "8px 0 56px 0" }}>
                    <S.IconContainer bgUrl={`/src/assets/icons/placeIcon${index + 2}.svg`}>
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
      {recommended && (
        <BottomSheet isOpen={isOpen} close={close}>
          <S.BottomSheetTopContainer>
            <S.Title>어느 일정에 등록할까요?</S.Title>
            <Chip
              text="산선암"
              leadingIcon={
                <img
                  src={"/src/assets/images/place.png"}
                  style={{ width: "24px", height: "24px", borderRadius: "999px" }}
                />
              }
              style={{ cursor: "default" }}
            />
            <div style={{ borderRadius: "8px", overflow: "hidden" }}>
              <MiniMapComponent lat={33.55635} lng={126.795841} />
            </div>
          </S.BottomSheetTopContainer>
          <S.DaysUl>
            {days.map((day, index) => (
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
      {recommended && (
        <SimpleModal
          image="/src/assets/images/warning.svg"
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
