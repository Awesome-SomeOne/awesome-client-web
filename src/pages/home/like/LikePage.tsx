import ClearIcon from "@/assets/icons/ClearIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/home/PlaceComponent/index";
import { useEffect, useState } from "react";
import * as S from "./styles";

const LikePage = ({ onClose }: { onClose: () => void }) => {
  const [place, setPlace] = useState([]);
  const [currentTab, setCurrentTab] = useState("숙소");

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
    // tab 변경 처리하기
  };

  useEffect(() => {
    setPlace([]);
  }, []);

  return (
    <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Appbar
        title="좋아요 모음"
        textAlign="center"
        rightIcon1={
          <div onClick={onClose}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <TabAnatomy tabs={["관광지", "숙소", "식당", "액티비티"]} selectedTab={currentTab} onClick={handleClick} />
      {!place.length ? (
        <S.ComponentCol>
          <PlaceComponent
            image="src/assets/images/accommodation.png"
            name="숙소이름이 들어갑니다"
            rating="5.0"
            count={1000}
            address="강원 춘천시 남산면 남이섬길  1"
            like={true}
          />
        </S.ComponentCol>
      ) : (
        <S.NoResultContainer>
          <S.NoResultTitle>맘에 들어한 장소가 없어요</S.NoResultTitle>
          <S.NoResultParagraph>마음에 든 장소 담으러 가볼까요?</S.NoResultParagraph>
        </S.NoResultContainer>
      )}
    </div>
  );
};

export default LikePage;
