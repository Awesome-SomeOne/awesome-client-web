import { useGetLandmarkPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import Chip from "@/components/common/chip/index";
import Appbar from "@/components/common/header/Appbar";
import { PlaceComponent } from "@/components/place/PopularPlacePage/index";
import { Suspense, useEffect } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { Place } from "@/types/myTrip";
import ErrorBoundary from "@/hooks/Errorboundary";

const PopularPlace = () => {
  const navigate = useNavigate();
  const { data: places = [] } = useGetLandmarkPlaces({ islandId: 1 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <Chip text="섬 전체" shape="box" trailingIcon={<DropdownIcon />} />
      {places.map((place: Place, index: number) => (
        <PlaceComponent
          key={index}
          image={place.imgUrl || "/src/assets/images/popular2.png"}
          name={place.name}
          onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
        />
      ))}
    </S.Container>
  );
};

const PopularPlacePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="관광지 둘러보기"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PopularPlace />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default PopularPlacePage;
