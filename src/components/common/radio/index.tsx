import * as S from "./styles";

interface IRadioProps {
  text?: string;
  name?: string;
  value?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
}

/**
 * Radio
 * @param text 라디오 버튼 오른쪽 텍스트(옵션)
 * @returns
 */

const Radio = ({ text, ...props }: IRadioProps) => {
  return (
    <S.RadioContainer>
      <S.RadioButton {...props} type="radio" />
      {text?.length && <S.RadioText>{text}</S.RadioText>}
    </S.RadioContainer>
  );
};

export default Radio;
