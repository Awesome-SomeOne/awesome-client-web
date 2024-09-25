import { useGetRecommendPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/place/PlaceComponent/index";
import { Suspense, useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { Place } from "@/types/myTrip";
import ErrorBoundary from "@/hooks/Errorboundary";

const RecommendPlace = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState("숙박");

  const { data: places = [] } = useGetRecommendPlaces({ islandId: 1, category: currentTab });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

  return (
    <>
      <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleTabClick} />
      <S.ComponentCol>
        {places.map((place: Place, index: number) => (
          <PlaceComponent
            key={index}
            image={place.imgUrl || "src/assets/images/place_null.svg"}
            name={place.name}
            rating={place.rating?.toString() || "5.0"}
            count={1000}
            address={place.address}
            like={place.status}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        ))}
      </S.ComponentCol>
    </>
  );
};

const RecommendPlacePage = () => {
  const navigate = useNavigate();

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
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <RecommendPlace />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default RecommendPlacePage;
