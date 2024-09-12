import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const CurrentLocation = () => {
  const navigate = useNavigate();

  return (
    <S.CurrentLocationLayout>
      <S.CurrentLocationBox>
        <S.LocationImage src="src/assets/icons/location.svg" />
        <S.LocationTitle>현재 위치</S.LocationTitle>
        <S.Location>경상남도 김해시</S.Location>
      </S.CurrentLocationBox>
      <S.DownArrow src="src/assets/icons/down.svg" onClick={() => navigate(PATH.LOCATION)} />
    </S.CurrentLocationLayout>
  );
};

export default CurrentLocation;
