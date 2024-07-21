import { ReactNode, ButtonHTMLAttributes } from "react";
import * as S from "./styles";
import LoadingSpinner from "../../../assets/icons/LoadingSpinner";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: "sm" | "lg";
  isLoadingBtn?: boolean;
}

const PrimaryButton = ({ text, leadingIcon, trailingIcon, size = "sm", isLoadingBtn, ...props }: IButtonProps) => {
  if (isLoadingBtn) {
    return (
      <S.PrimaryButtonContainer size={size} {...props}>
        <LoadingSpinner size={size} />
      </S.PrimaryButtonContainer>
    );
  }
  return (
    <S.PrimaryButtonContainer size={size} {...props}>
      {leadingIcon}
      {text}
      {trailingIcon}
    </S.PrimaryButtonContainer>
  );
};

export default PrimaryButton;
