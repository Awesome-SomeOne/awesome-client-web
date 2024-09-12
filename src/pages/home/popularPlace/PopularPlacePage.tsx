// import { useGetLandmarkPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import Chip from "@/components/common/chip/index";
import Appbar from "@/components/common/header/Appbar";
import { PlaceComponent } from "@/components/home/PopularPlacePage/index";
import { Place } from "@/types/myTrip";
import { useEffect } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";

const PopularPlacePage = () => {
  const navigate = useNavigate();
  // const { data: places = [] } = useGetLandmarkPlaces({ islandId: 1 });
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
      name: "장소",
      address: "주소",
      category: "숙소",
      rating: 5.0
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <S.Container>
        <Chip text="섬 전체" shape="box" trailingIcon={<DropdownIcon />} />
        {places.map((place: Place) => (
          <PlaceComponent
            image={"/src/assets/images/popular2.png"}
            name={place.name}
            onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
          />
        ))}
      </S.Container>
    </div>
  );
};

export default PopularPlacePage;
