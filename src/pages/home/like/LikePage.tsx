import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/place/PlaceComponent/index";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";

const LikePage = () => {
  const navigate = useNavigate();
  const [place, setPlace] = useState([]);
  const [currentTab, setCurrentTab] = useState("숙박");

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
    // tab 변경 처리하기
  };

  const places = [
    {
      id: 1,
      name: "장소",
      address: "주소",
      category: "숙박",
      rating: 5.0
    }
  ];

  useEffect(() => {
    setPlace([]);
  }, []);

  return (
    <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Appbar
        title="좋아요 모음"
        textAlign="center"
        rightIcon1={
          <div onClick={() => navigate(-1)}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleClick} />
      {!place.length ? (
        <S.ComponentCol>
          {places.map((place, index) => (
            <PlaceComponent
              key={index}
              image={"/images/accommodation.png"}
              name={place.name}
              rating={place.rating.toString()}
              count={1000}
              address={place.address}
              like={true}
              onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
            />
          ))}
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
