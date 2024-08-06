import { ReactNode } from "react";
import * as S from "./styles";

interface AppbarProps {
  leftIcon?: ReactNode;
  title: string;
  textAlign: "left" | "center";
  rightIcon1?: ReactNode;
  rightIcon2?: ReactNode;
  rightIcon3?: ReactNode;
}

export default function Appbar({ leftIcon, title, textAlign, rightIcon1, rightIcon2, rightIcon3 }: AppbarProps) {
  return (
    <S.OutContainer>
      <S.LeftContainer>{leftIcon}</S.LeftContainer>
      <S.CenterContainer align={textAlign}>{title}</S.CenterContainer>
      <S.RightContainer>
        {rightIcon1}
        {rightIcon2}
        {rightIcon3}
      </S.RightContainer>
    </S.OutContainer>
  );
}
