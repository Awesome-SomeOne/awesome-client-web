import { Island, Place } from "@/types/myTrip";
import CheckBox from "../../common/controller/CheckBox";
import * as S from "./styles";

const ListComponent = ({
  place,
  onClick,
  checkbox = false,
  selected = false
}: {
  place: Place | Island;
  onClick: () => void;
  checkbox?: boolean;
  selected?: boolean;
}) => {
  return (
    <S.ListContainer onClick={onClick} selected={selected}>
      <S.PlaceImage src={"/src/assets/images/place.png"} />
      <S.PlaceContainer>
        <S.UpperText>
          <S.PlaceName>{place.name}</S.PlaceName>
          {"category" in place && <S.PlaceDesc>{place.category}</S.PlaceDesc>}
        </S.UpperText>
        <S.PlaceDesc>{place.address}</S.PlaceDesc>
      </S.PlaceContainer>
      {checkbox && <CheckBox size="sm" checked={selected} />}
    </S.ListContainer>
  );
};

export default ListComponent;
