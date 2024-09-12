import { Place } from "@/types/myTrip";
import CheckBox from "../../common/controller/CheckBox";
import * as S from "./styles";

const ListComponent = ({
  place,
  onClick,
  checkbox = false,
  selected = false
}: {
  place: Place;
  onClick: () => void;
  checkbox?: boolean;
  selected?: boolean;
}) => {
  const { name, address, category } = place;
  return (
    <S.ListContainer onClick={onClick} selected={selected}>
      <S.PlaceImage src={"/src/assets/images/place.png"} />
      <S.PlaceContainer>
        <S.UpperText>
          <S.PlaceName>{name}</S.PlaceName>
          <S.PlaceDesc>{category}</S.PlaceDesc>
        </S.UpperText>
        <S.PlaceDesc>{address}</S.PlaceDesc>
      </S.PlaceContainer>
      {checkbox && <CheckBox size="sm" checked={selected} />}
    </S.ListContainer>
  );
};

export default ListComponent;
