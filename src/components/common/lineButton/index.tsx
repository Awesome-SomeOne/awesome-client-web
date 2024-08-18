import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import { Theme } from "@/styles/theme";


interface ILineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: "sm" | "lg";
  isLoadingBtn?: boolean;
  colorStyle?: "primary" | "assistive";
}

/**
 * LineButton
 * @description 기타 스타일은 inline style을 활용해 주세요
 * @param text 텍스트
 * @param leadingIcon 앞 아이콘
 * @param trailingIcon 뒤 아이콘
 * @param size 사이즈(sm, lg)
 * @param isLoadingBtn 단일 로딩 버튼인 경우 true
 * @param colorStyle 회색류 버튼인 경우 assistive(default: primary)
 * @returns
 */
const LineButton = ({
  text,
  leadingIcon,
  trailingIcon,
  size = "sm",
  isLoadingBtn,
  colorStyle = "primary",
  ...props
}: ILineButtonProps) => {
  const isPrimaryStyle = colorStyle === "primary";

  if (isLoadingBtn) {
    return (
      <S.LineButtonContainer size={size} primarystyle={isPrimaryStyle} {...props}>
        <LoadingSpinner
          size={size}
          color={isPrimaryStyle ? Theme.colors.Border_Primary_Strong : Theme.colors.Label_Disable}
        />
      </S.LineButtonContainer>
    );
  }
  return (
    <S.LineButtonContainer size={size} primarystyle={isPrimaryStyle} {...props}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </S.LineButtonContainer>
  );
};

export default LineButton;
