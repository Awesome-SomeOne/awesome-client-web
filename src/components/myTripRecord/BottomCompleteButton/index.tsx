import Button from "../../common/button";
import CheckBox from "../../common/controller/CheckBox";
import * as S from "./styles";

const BottomCompleteButton = () => {
  return (
    <S.BottomCompleteButtonWrapper>
      <CheckBox name="shareWithCommunity" size="sm">
        커뮤니티에 공유하기
      </CheckBox>
      <Button text="여행 추억 기록하기" size="lg" />
    </S.BottomCompleteButtonWrapper>
  );
};

export default BottomCompleteButton;
