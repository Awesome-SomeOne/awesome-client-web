import * as S from "./styles";
import Divider from "@/components/common/divider";

const DetailTravelMemories = () => {
  return (
    <S.SectionWrapper>
      <S.TextWrapper>
        <S.Text className="title">한줄평은 최대 25자 이내로 작성이 가능합니다 넘어갈시 2줄로 작성</S.Text>
        <Divider type="line" />
        <S.Text className="content">
          햇빛이 너무 맑아 눈물 납니다 살아있구나 느끼니 눈물 납니다 기러기떼 열 지어 북으로 가고 길섶에 풀들도
          돌아오는데 당신은 가고 그리움만 남아서가 아닙니다 이렇게 살아있구나 생각하니 눈물납니다 _다시 오는 봄/도종환
          햇빛이 너무 맑아 눈물 납니다 살아있구나 느끼니 눈물 납니다 기러기떼 열 지어 북으로 가고 길섶에 풀들도
          돌아오는데 당신은 가고 그리움만 남아서가 아닙니다 이렇게 살아있구나 생각하니 눈물납니다 _다시 오는 봄/도종환
        </S.Text>
      </S.TextWrapper>
      <S.ImageFlexWrapper>
        <S.Image src="https://picsum.photos/200/300" />
        <S.Image src="https://picsum.photos/200/300" />
        <S.Image src="https://picsum.photos/200/300" />
      </S.ImageFlexWrapper>
      좋아요 버튼
    </S.SectionWrapper>
  );
};

export default DetailTravelMemories;
