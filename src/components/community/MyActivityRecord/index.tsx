import * as S from "./styles";

const MyActivityRecord = () => {
  const LIST = ["내 글", "내 댓글", "스크랩"];
  return (
    <S.MyActivityRecordWrapper>
      {LIST.map((item, index) => (
        <S.ButtonWrapper key={index}>
          <S.ButtonText className="title">{item}</S.ButtonText>
          <S.ButtonText className="number">3</S.ButtonText>
        </S.ButtonWrapper>
      ))}
    </S.MyActivityRecordWrapper>
  );
};

export default MyActivityRecord;
