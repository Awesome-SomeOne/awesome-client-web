import * as S from "./styles";
import Button from "@/components/common/button";

// import CheckBox from "@/components/common/controller/CheckBox";

interface BottomCompleteButtonProps {
  isPublic: boolean;
  setIsPublic: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomCompleteButton = ({ isPublic, setIsPublic }: BottomCompleteButtonProps) => {
  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsPublic(event.target.checked);
  // };

  return (
    <S.BottomCompleteButtonWrapper>
      {/* <CheckBox name="shareWithCommunity" size="sm" checked={isPublic} onChange={handleCheckboxChange}>
        커뮤니티에 공유하기
      </CheckBox> */}
      <Button text="여행 추억 기록하기" size="lg" type="submit" />
    </S.BottomCompleteButtonWrapper>
  );
};

export default BottomCompleteButton;
