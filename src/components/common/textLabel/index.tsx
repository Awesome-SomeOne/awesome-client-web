import * as S from "./styles";

interface ITextLabelProps {
  text?: string;
  size?: "sm" | "lg";
  color?: "success" | "primary" | "neutral";
  fill?: boolean;
}

/**
 * TextLabel
 * @param text 텍스트
 * @param size 사이즈(sm, lg)
 * @param color 색상(success, primary, neutral)
 * @param fill 바탕(기본값은 true)
 */

const TextLabel = ({ text, size = "sm", color = "primary", fill = true }: ITextLabelProps) => {
  return (
    <S.TextLabelContainer size={size} color={color} fill={fill}>
      #{text}
    </S.TextLabelContainer>
  );
};

export default TextLabel;
