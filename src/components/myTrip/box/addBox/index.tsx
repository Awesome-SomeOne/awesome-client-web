import * as S from "./styles";

const AddBox = ({ onClick }: { onClick: () => void }) => {
  return (
    <S.AddBox onClick={onClick}>
      <img src="/icons/addIcon.svg" alt="" />
      장소를 추가해주세요!
    </S.AddBox>
  );
};

export default AddBox;
