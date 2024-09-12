// import { useGetRecommendPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/home/PlaceComponent/index";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";

const RecommendPlacePage = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("숙소");

  // const { data: places = [] } = useGetRecommendPlaces({ islandId: 1, category: currentTab });
  /*
    [
      {
        Long id
        String name
        String address
        Business_category category
        Double rating
      }
    ]
  */

  const places = [
    {
      id: 1,
      name: "장소 이름",
      address: "주소",
      category: "숙소",
      rating: 5.0
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

  return (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="추천 장소"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
      <TabAnatomy tabs={["숙소", "식당", "관광지", "액티비티"]} selectedTab={currentTab} onClick={handleTabClick} />
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
    </div>
  );
};

export default RecommendPlacePage;
