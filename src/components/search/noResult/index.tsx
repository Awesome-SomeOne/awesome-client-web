import * as S from "./styles";

export const NoResult = () => {
  return (
    <S.NoResultContainer>
      <S.NoResultTitle>검색 결과가 없어요!</S.NoResultTitle>
      <S.NoResultParagraph>
        아직 제공하지 않는 장소이거나, 오타일 수 있어요.
        <br />
        다시 확인해주세요.
      </S.NoResultParagraph>
    </S.NoResultContainer>
  );
};
