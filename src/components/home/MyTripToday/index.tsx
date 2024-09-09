import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const MyTripToday = () => {
  const navigate = useNavigate();
  return (
    <S.TripLayout>
      <S.GradientBorder onClick={() => navigate(PATH.MY_TRIP(1))}>
        <S.Box>
          <S.Left>
            <S.Paragraph>여행 시작! 일정을 확인해봐요</S.Paragraph>
            <S.Info>
              <S.Image src="" />
              <S.Address>경상북도 울릉도</S.Address>
            </S.Info>
          </S.Left>
          <img src="/src/assets/icons/right.svg" />
        </S.Box>
      </S.GradientBorder>
    </S.TripLayout>
  );
};

export default MyTripToday;
