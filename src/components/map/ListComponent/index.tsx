import StarIcon from "@/assets/icons/StarIcon";

import * as S from "./styles";

const ListComponent = () => {
  return (
    <S.ListCardContainer>
      <S.TitleFlexWrapper>
        <S.Text className="title">식당명이 들어갑니다</S.Text>
        <S.Text className="subTitle">카페</S.Text>
      </S.TitleFlexWrapper>
      <S.TitleFlexWrapper className="center">
        <S.Text className="status">영업 중</S.Text>
        <S.SmallBar />
        <S.RateWrapper>
          <StarIcon fill size={16} />
          <S.Text className="rate">5.0점(999+)</S.Text>
        </S.RateWrapper>
        <S.SmallBar />
        <S.Text className="subTitle">울릉 울릉읍</S.Text>
      </S.TitleFlexWrapper>
      <S.ImageWrapper>
        <img src="https://picsum.photos/200/300" alt="image" />
        <img src="https://picsum.photos/200/300" alt="image" />
        <img src="https://picsum.photos/200/300" alt="image" />
      </S.ImageWrapper>
    </S.ListCardContainer>
  );
};

export default ListComponent;
