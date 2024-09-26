import ToggleButton from "@/components/common/toggle";
import * as S from "./styles";

interface ToggleWithTextProps {
  text: string;
  on: boolean;
  disable: boolean;
  onPress: () => void;
}

const ToggleWithText = ({ text, on, disable, onPress }: ToggleWithTextProps) => {
  return (
    <S.Root>
      <S.StyledText>{text}</S.StyledText>
      <ToggleButton on={on} disable={disable} onPress={onPress} />
    </S.Root>
  );
};

export default ToggleWithText;
