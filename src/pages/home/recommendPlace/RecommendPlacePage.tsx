import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/home/PlaceComponent/index";
import { useEffect, useState } from "react";
import DetailPage from "../detail/DetailPage";
import * as S from "./styles";

const RecommendPlacePage = ({ onClose }: { onClose: () => void }) => {
  const [currentTab, setCurrentTab] = useState("숙소");
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.innerText);
    // 탭 변경 처리
  };

  return !showDetail ? (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="추천 장소"
        textAlign="center"
        leftIcon={
          <div onClick={onClose}>
            <BackIcon />
          </div>
        }
      />
      <TabAnatomy tabs={["숙소", "식당", "렌트카", "액티비티"]} selectedTab={currentTab} onClick={handleTabClick} />
      <S.ComponentCol>
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          like={true}
          onClick={() => setShowDetail(true)}
        />
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          like={true}
          onClick={() => setShowDetail(true)}
        />
        <PlaceComponent
          image="src/assets/images/accommodation.png"
          name="숙소이름이 들어갑니다"
          rating="5.0"
          count={1000}
          address="강원 춘천시 남산면 남이섬길 1"
          like={true}
          onClick={() => setShowDetail(true)}
        />
      </S.ComponentCol>
    </div>
  ) : (
    <DetailPage onClose={() => setShowDetail(false)} />
  );
};

export default RecommendPlacePage;
