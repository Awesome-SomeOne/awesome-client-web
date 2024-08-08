import { ReactNode } from "react";
import * as S from "./styles";

interface AppbarProps {
  title: string;
  textAlign: "left" | "center";
  leftIcon?: ReactNode;
  rightIcon1?: ReactNode;
  rightIcon2?: ReactNode;
  rightIcon3?: ReactNode;
}

export default function Appbar({ title, textAlign, leftIcon, rightIcon1, rightIcon2, rightIcon3 }: AppbarProps) {
  return (
    <S.OutContainer>
      {leftIcon && <S.LeftContainer>{leftIcon}</S.LeftContainer>}
      <S.CenterContainer align={textAlign}>{title}</S.CenterContainer>
      {rightIcon1 && <S.RightContainer>{rightIcon1}</S.RightContainer>}
      {rightIcon2 && <S.RightContainer>{rightIcon2}</S.RightContainer>}
      {rightIcon3 && <S.RightContainer>{rightIcon3}</S.RightContainer>}
    </S.OutContainer>
  );
}
