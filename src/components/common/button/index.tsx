import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";
import LoadingSpinner from "@/assets/icons/LoadingSpinner";
import { Theme } from "@/styles/theme";


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: "sm" | "lg";
  isLoadingBtn?: boolean;
  isTertiaryButton?: boolean;
}

/**
 * PrimaryButton
 * @description 기타 스타일은 inline style을 활용해 주세요
 * @param text 텍스트
 * @param leadingIcon 앞 아이콘
 * @param trailingIcon 뒤 아이콘
 * @param size 사이즈(sm, lg)
 * @param isLoadingBtn 단일 로딩 버튼인 경우 true
 * @param isTertiaryButton 회색류 버튼인 경우 true(default: primaryButton)
 * @returns
 */
const Button = ({
  text,
  leadingIcon,
  trailingIcon,
  size = "sm",
  isLoadingBtn,
  isTertiaryButton = false,
  ...props
}: IButtonProps) => {
  if (isLoadingBtn) {
    return (
      <S.ButtonContainer size={size} tertiary={isTertiaryButton} {...props}>
        <LoadingSpinner size={size} color={Theme.colors.Label_Disable} />
      </S.ButtonContainer>
    );
  }
  return (
    <S.ButtonContainer size={size} tertiary={isTertiaryButton} {...props}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </S.ButtonContainer>
  );
};

export default Button;
