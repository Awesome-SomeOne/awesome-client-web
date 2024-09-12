import Button from "@/components/common/button/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { Place } from "@/types/myTrip";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AddBox from "../box/addBox/index";
import EmptyBox from "../box/emptyBox/index";
import PlaceBox from "../box/placeBox/index";
import * as S from "./styles";

interface IPlanProps {
  selectedDay: number;
  recommended?: Place[];
  isPageEditing: boolean;
  onPageEdit: () => void;
  onAdd: () => void;
  onEdit: () => void;
  onPageEditDone: () => void;
  onSelect: (day: number) => void;
}

const Plan = ({ selectedDay, isPageEditing, onPageEdit, onAdd, onEdit, onPageEditDone, onSelect }: IPlanProps) => {
  // daysArray 만들기 -> index가 1,2,3... 날짜가 date
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

  useEffect(() => {
    onSelect(selectedDay);
  }, [selectedDay]);
  // Day별 일정 불러오기
  const [travelPlaceList, setTravelPlaceList] = useState<Place[]>([
    // {
    //   name: "산선암",
    //   category: "관광명소",
    //   address: "경상북도 울릉도"
    // },
    // {
    //   name: "산선암",
    //   category: "관광명소",
    //   address: "경상북도 울릉도"
    // }
  ]);

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
    // setSelectedDay(event.target.innerText.slice(4));
    const day = parseInt(event.target.innerText.slice(4));
    onSelect(day);

    // 일정 불러오기
    setTravelPlaceList([
      {
        id: 0,
        name: "산선암",
        address: "경상북도 울릉도",
        category: "관광명소"
      },
      {
        id: 1,
        name: "산선암",
        address: "경상북도 울릉도",
        category: "관광명소"
      },
      {
        id: 2,
        name: "산선암",
        address: "경상북도 울릉도",
        category: "관광명소"
      }
    ]);
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
              <S.Date>2024.06.28</S.Date>
              <S.Weather>32℃ 맑음</S.Weather>
            </S.Info>
            {isPageEditing && <S.TextButton onClick={onEdit}>장소 편집</S.TextButton>}
          </S.Row>
          {travelPlaceList.length === 0 && (isPageEditing ? <AddBox onClick={handleAdd} /> : <EmptyBox />)}

          {travelPlaceList.map((place, index) => (
            <>
              <PlaceBox
                order={index + 1}
                place={place}
                line={!isPageEditing ? travelPlaceList.length - 1 > index : true}
              />
              {index < travelPlaceList.length - 1 && (
                <p style={{ fontSize: "14px", fontWeight: "600", lineHeight: "18px" }}>{512}m</p>
              )}
              {isPageEditing && index === travelPlaceList.length - 1 && (
                <div style={{ display: "flex", gap: "4px", height: "96px" }}>
                  <div style={{ width: "24px", textAlign: "center", padding: "8px 0 56px 0" }}>
                    <S.IconContainer bgUrl={`/src/assets/icons/placeIcon${index + 2}.svg`}>
                      <S.NumberCircle>{index + 2}</S.NumberCircle>
                    </S.IconContainer>
                  </div>
                  <AddBox onClick={handleAdd} />
                </div>
              )}
            </>
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
