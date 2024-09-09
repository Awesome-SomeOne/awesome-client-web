import { PlaceType } from "@/pages/myTrip/editPlan/EditPlanPage";
import * as S from "./styles";

const PlaceBox = ({ order = 1, place, line = true }: { order: number; place: PlaceType; line?: boolean }) => {
  const calculatedOrder = order % 6;
  return (
    <div>
      <div style={{ display: "flex", gap: "4px", height: "96px" }}>
        <div style={{ width: "24px", textAlign: "center", paddingTop: "8px" }}>
          <S.IconContainer bgUrl={`/src/assets/icons/placeIcon${calculatedOrder}.svg`}>
            <S.NumberCircle>{order}</S.NumberCircle>
          </S.IconContainer>
          {line && <img src="/src/assets/icons/line.svg" style={{ height: "56px" }} />}
        </div>
        <S.PlaceBox>
          <S.PlaceImage src={"/src/assets/images/place.png"} />
          <div>
            <S.UpperText>
              <S.PlaceName>{place.name}</S.PlaceName>
              <S.PlaceDesc>{place.type}</S.PlaceDesc>
            </S.UpperText>
            <S.PlaceDesc>{place.address}</S.PlaceDesc>
          </div>
        </S.PlaceBox>
      </div>
    </div>
  );
};

export default PlaceBox;
