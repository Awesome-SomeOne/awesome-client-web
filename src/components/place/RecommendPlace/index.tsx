import { useGetRecommendPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "@/components/common/generalHeader/index";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import { Suspense, useState } from "react";
import PlaceComponent from "../PlaceComponent/index";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { useAtom } from "jotai";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import ErrorBoundary from "@/hooks/Errorboundary";

const RecommendPlaceContent = ({ currentTab }: { currentTab: string }) => {
  const navigate = useNavigate();
  const [selectedIslandId] = useAtom(selectedIslandIdAtom);

  const { data = [] } = useGetRecommendPlaces({ islandId: selectedIslandId, category: currentTab });
  const places = data.slice(0, 3);

  return (
    <S.ComponentCol>
      {places.map(
        (
          place: {
            id: number;
            name: string;
            address: string;
            imgUrl: string;
            rating: number;
            status: boolean;
          },
          index: number
        ) => (
          <PlaceComponent
            key={index}
            image={place.imgUrl || "/images/place_null.svg"}
            name={place.name}
            rating={place.rating.toString()}
            count={1000}
            address={place.address}
            like={place.status}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        )
      )}
    </S.ComponentCol>
  );
};

const RecommendPlace = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(CATEGORY_LIST[0]);

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

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
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <RecommendPlaceContent currentTab={currentTab} />
        </Suspense>
      </ErrorBoundary>
    </S.RecLayout>
  );
};

export default RecommendPlace;
