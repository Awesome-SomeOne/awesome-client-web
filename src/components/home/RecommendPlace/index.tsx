import GeneralHeader from "@/components/common/generalHeader/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { useState } from "react";
import PlaceComponent from "../PlaceComponent/index";
import * as S from "./styles";

const RecommendPlace = ({ onClick }: { onClick: (step: string) => void }) => {
  const [currentTab, setCurrentTab] = useState("숙소");

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
    // tab 변경 처리하기
  };

  return (
    <S.RecLayout>
      <div>
        <GeneralHeader
          title="추천 장소"
          sub="전체보기"
          titleSize="sm"
          spacingSize="md"
          subOnClick={() => onClick("recommendPlace")}
        />
        <TabAnatomy tabs={["숙소", "식당", "렌트카", "액티비티"]} selectedTab={currentTab} onClick={handleClick} />
      </div>
      <S.ComponentCol>
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          like={true}
          onClick={() => onClick("detail")}
        />
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          onClick={() => onClick("detail")}
        />
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          onClick={() => onClick("detail")}
        />
      </S.ComponentCol>
    </S.RecLayout>
  );
};

export default RecommendPlace;
