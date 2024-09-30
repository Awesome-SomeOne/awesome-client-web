import { useGetLandmarkPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "@/components/common/generalHeader/index";
import { PATH } from "@/constants/path";
import * as S from "./styles";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import { useAtom } from "jotai";
import ErrorBoundary from "@/hooks/Errorboundary";
import { Suspense } from "react";

const PopularPlaceContent = () => {
  const navigate = useNavigate();
  const [selectedIslandId] = useAtom(selectedIslandIdAtom);

  const { data = [] } = useGetLandmarkPlaces({ islandId: selectedIslandId });
  const places = data.slice(0, 3);

  return (
    <S.PlaceBox>
      {places.map(
        (
          place: {
            id: number;
            name: string;
            imgUrl: string;
          },
          index: number
        ) => (
          <Place
            image={place.imgUrl || "/images/popular1.png"}
            ranking={index + 1}
            name={place.name}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        )
      )}
    </S.PlaceBox>
  );
};

const Place = ({
  image,
  ranking,
  name,
  onClick
}: {
  image: string;
  ranking: number;
  name: string;
  onClick: () => void;
}) => {
  return (
    <S.PlaceImage src={image} onClick={onClick}>
      <S.PlaceInfo>
        <span>{ranking}위</span>
        <span>{name}</span>
      </S.PlaceInfo>
    </S.PlaceImage>
  );
};

const PopularPlace = () => {
  const navigate = useNavigate();

  return (
    <S.PopularPlaceLayout>
      <GeneralHeader
        title="인기 관광지 둘러보기"
        sub="전체보기"
        titleSize="sm"
        spacingSize="md"
        subOnClick={() => navigate(PATH.POPULAR_PLACE)}
      />
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PopularPlaceContent />
        </Suspense>
      </ErrorBoundary>
    </S.PopularPlaceLayout>
  );
};

export default PopularPlace;
