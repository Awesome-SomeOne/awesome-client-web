// import { useGetRecommendPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "@/components/common/generalHeader/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { useState } from "react";
import PlaceComponent from "../PlaceComponent/index";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { CATEGORY_LIST } from "@/constants/homePageConstants";

const RecommendPlace = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("숙소");

  // const { data: places = [] } = useGetRecommendPlaces({ islandId: 1, category: currentTab });

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

  const places = [
    {
      id: 1,
      name: "장소",
      address: "주소",
      category: "숙소",
      rating: 5.0
    }
  ];

  return (
    <S.RecLayout>
      <div>
        <GeneralHeader
          title="추천 장소"
          sub="전체보기"
          titleSize="sm"
          spacingSize="md"
          subOnClick={() => navigate(PATH.RECOMMEND_PLACE)}
        />
        <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleClick} />
      </div>
      <S.ComponentCol>
        {places.map((place, index) => (
          <PlaceComponent
            key={index}
            image={"src/assets/images/place_null.svg"}
            name={place.name}
            rating={place.rating.toString()}
            count={1000}
            address={place.address}
            like={true}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        ))}
      </S.ComponentCol>
    </S.RecLayout>
  );
};

export default RecommendPlace;
