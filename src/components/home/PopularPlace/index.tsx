// import { useGetLandmarkPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import GeneralHeader from "@/components/common/generalHeader/index";
import { PATH } from "@/constants/path";
import * as S from "./styles";

const PopularPlace = () => {
  const navigate = useNavigate();

  // const { data: places = [] } = useGetLandmarkPlaces({ islandId: 1 });

  const places = [
    {
      id: 1,
      name: "장소",
      address: "주소",
      category: "숙박",
      rating: 5.0
    }
  ];

  return (
    <S.PopularPlaceLayout>
      <GeneralHeader
        title="인기 관광지 둘러보기"
        sub="전체보기"
        titleSize="sm"
        spacingSize="md"
        subOnClick={() => navigate(PATH.POPULAR_PLACE)}
      />
      <S.PlaceBox>
        {places.map((place, index) => (
          <Place
            image={"src/assets/images/popular1.png"}
            ranking={index + 1}
            name={place.name}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        ))}
      </S.PlaceBox>
    </S.PopularPlaceLayout>
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

export default PopularPlace;
