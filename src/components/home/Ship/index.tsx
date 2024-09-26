import LineButton from "@/components/common/lineButton/index";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Ship = () => {
  const navigate = useNavigate();
  return (
    <S.ShipLayout>
      <S.Box>
        <img src="/images/ship.svg" />
        <S.ShipParagraph>섬 배편 정보 확인하기</S.ShipParagraph>
        <LineButton
          text="한국 해운조합 여객선 예매 바로가기"
          size="lg"
          onClick={() => (window.location.href = "https://island.theksa.co.kr/")}
        />
      </S.Box>
    </S.ShipLayout>
  );
};

export default Ship;
