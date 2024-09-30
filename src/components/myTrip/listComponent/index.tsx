import CheckBox from "../../common/controller/CheckBox";
import * as S from "./styles";

const ListComponent = ({
  place,
  onClick,
  checkbox = false,
  selected = false
}: {
  place: {
    name: string;
    address: string;
    img_url?: string;
    imgUrl?: string;
    category?: string;
  };
  onClick: () => void;
  checkbox?: boolean;
  selected?: boolean;
}) => {
  return (
    <S.ListContainer onClick={onClick} selected={selected}>
      <S.PlaceImage src={place.imgUrl || place.img_url} />
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
