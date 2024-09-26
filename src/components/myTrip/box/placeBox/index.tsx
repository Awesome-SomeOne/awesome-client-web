import { Place } from "@/types/myTrip";
import * as S from "./styles";

const PlaceBox = ({ order = 1, place, line = true }: { order: number; place: Place; line?: boolean }) => {
  const calculatedOrder = order % 6;
  return (
    <div>
      <div style={{ display: "flex", gap: "4px", height: "96px" }}>
        <div style={{ width: "24px", textAlign: "center", paddingTop: "8px" }}>
          <S.IconContainer bgUrl={`/icons/placeIcon${calculatedOrder}.svg`}>
            <S.NumberCircle>{order}</S.NumberCircle>
          </S.IconContainer>
          {line && <img src="/icons/line.svg" style={{ height: "56px" }} />}
        </div>
        <S.PlaceBox>
          <S.PlaceImage src={place.imgUrl || '/images/place.png"'} />
          <div>
            <S.UpperText>
              <S.PlaceName>{place.name}</S.PlaceName>
              <S.PlaceDesc>{place.category}</S.PlaceDesc>
            </S.UpperText>
            <S.PlaceDesc>{place.address}</S.PlaceDesc>
          </div>
        </S.PlaceBox>
      </div>
    </div>
  );
};

export default PlaceBox;
