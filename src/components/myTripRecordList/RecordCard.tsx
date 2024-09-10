import * as S from "./styles";

type RecordCard = {
  area: string;
  startDate: string;
  endDate: string;
  text: string;
  image1: string;
  image2?: string;
  image3?: string;
};

export default function RecordCard({ area, startDate, endDate, text, image1, image2, image3 }: RecordCard) {
  return (
    <S.Root>
      <S.TextSection>
        <S.TopSection>
          <S.Area>{area}</S.Area>
          <S.Date>
            {startDate} ~ {endDate}
          </S.Date>
        </S.TopSection>
        <S.StyledText>{text}</S.StyledText>
      </S.TextSection>
      <S.PhotoSection>
        {!image2 ? (
          <S.FullImage src={image1} />
        ) : !image3 ? (
          <>
            <S.MainImage src={image1} />
            <img src={image2} style={{ width: "28%", height: "100%" }} />
          </>
        ) : (
          <S.MultipleImageSection>
            <S.LeftImageSection>
              <S.FullImage src={image1} />
            </S.LeftImageSection>
            <S.RightImageSection>
              <S.HalfImage src={image2} />
              <S.HalfImage src={image3} />
            </S.RightImageSection>
          </S.MultipleImageSection>
        )}
      </S.PhotoSection>
    </S.Root>
  );
}
