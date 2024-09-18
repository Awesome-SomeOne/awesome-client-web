import Button from "@/components/common/button/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { Day, Place } from "@/types/myTrip";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AddBox from "../box/addBox/index";
import EmptyBox from "../box/emptyBox/index";
import PlaceBox from "../box/placeBox/index";
import { calculateDistance, calculateDaysBetween, getDatesArray, getDaysArray } from "@/utils/myTrip/myTrip.utils";
import * as S from "./styles";

interface IPlanProps {
  daysList: Day[];
  positionList: { lat: number; lng: number }[];
  startDate: string;
  endDate: string;
  selectedDay: number;
  isPageEditing: boolean;
  onPageEdit: () => void;
  onAdd: () => void;
  onEdit: () => void;
  onPageEditDone: () => void;
  onSelect: (day: number) => void;
  setPositionList: React.Dispatch<React.SetStateAction<any>>;
}

const Plan = ({
  daysList,
  positionList,
  startDate,
  endDate,
  selectedDay,
  isPageEditing,
  onPageEdit,
  onAdd,
  onEdit,
  onPageEditDone,
  onSelect,
  setPositionList
}: IPlanProps) => {
  const dates = getDatesArray(startDate, endDate);
  const days = getDaysArray(calculateDaysBetween(startDate, endDate) - 1);

  // Day별 일정
  const [placeList, setPlaceList] = useState<Place[]>([]);

  useEffect(() => {
    if (daysList.length > 0) {
      const placesForDay = daysList.find((place) => place.day === selectedDay);
      if (placesForDay) {
        setPlaceList(placesForDay.places.sort((a, b) => (a.order || 0) - (b.order || 0)));
      } else {
        setPlaceList([]);
      }
    }
  }, [daysList, selectedDay]);

  useEffect(() => {
    onSelect(selectedDay);
  }, [selectedDay]);

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
    setHeight(minHeight);
  }, [minHeight]);

  useEffect(() => {
    if (placeList.length) {
      setMinHeight("152px");
    } else setMinHeight("120px");

    const positions: { lat: number; lng: number }[] = [];
    placeList.map((place) => {
      if (!place.x_address || !place.y_address) return;
      positions.push({
        lat: parseFloat(place.y_address),
        lng: parseFloat(place.x_address)
      });
    });
    setPositionList(positions);
  }, [placeList]);

  // Day 변경시
  const handleDayClick = (event: any) => {
    if (ref.current) {
      ref.current.scrollTop = 0;
    }

    const day = parseInt(event.target.innerText.slice(4));
    onSelect(day);
  };

  // 장소 추가하기 버튼 클릭시 추가하는 창 뜨게
  const handleAdd = () => {
    // 장소 추가 버튼 누른 Day 정보 prop으로 보내기 & 상태 유지??
    onAdd();
  };

  return (
    <>
      <S.BottomSection>
        <TabAnatomy tabs={days} selectedTab={days[selectedDay - 1]} onClick={handleDayClick} />
        <S.PlaceContainer ref={ref} animate={{ height: height }}>
          <S.Row>
            <S.Info>
              <S.Date>{dates[selectedDay - 1]}</S.Date>
              <S.Weather>32℃ 맑음</S.Weather>
            </S.Info>
            {isPageEditing && <S.TextButton onClick={onEdit}>장소 편집</S.TextButton>}
          </S.Row>
          {placeList.length === 0 && (isPageEditing ? <AddBox onClick={handleAdd} /> : <EmptyBox />)}

          {placeList.map((place, index) => (
            <div key={index}>
              <PlaceBox order={index + 1} place={place} line={!isPageEditing ? placeList.length - 1 > index : true} />
              {index < placeList.length - 1 && positionList.length > 1 && (
                <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "18px" }}>
                  {calculateDistance(
                    positionList[index].lat,
                    positionList[index].lng,
                    positionList[index + 1].lat,
                    positionList[index + 1].lng
                  )}
                  m
                </p>
              )}
              {isPageEditing && index === placeList.length - 1 && (
                <div style={{ display: "flex", gap: "4px", height: "96px" }}>
                  <div style={{ width: "24px", textAlign: "center", padding: "8px 0 56px 0" }}>
                    <S.IconContainer bgUrl={`/src/assets/icons/placeIcon${index + 2}.svg`}>
                      <S.NumberCircle>{index + 2}</S.NumberCircle>
                    </S.IconContainer>
                  </div>
                  <AddBox onClick={handleAdd} />
                </div>
              )}
            </div>
          ))}
          {!isPageEditing && (
            <Button
              text="일정 수정하기"
              isTertiaryButton
              style={{ width: "120px", margin: "0 auto" }}
              onClick={onPageEdit}
            />
          )}
        </S.PlaceContainer>
        {isPageEditing && (
          <Button
            text="수정 완료"
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
            size="lg"
            onClick={onPageEditDone}
          />
        )}
      </S.BottomSection>
    </>
  );
};

export default Plan;
