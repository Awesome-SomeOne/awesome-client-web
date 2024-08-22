import * as React from "react";
import { ReactNode } from "react";

import * as S from "./styles";

interface IChipProps {
  text?: string;
  type?: "round" | "box";
  hierarchy?: "primary" | "secondary";
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  onClick?: () => void;
  trailingIconOnClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

/**
 * Chip
 * @param text 텍스트
 * @param type 모양(round, box)
 * @param hierarchy 계층(primary, secondary)
 * @param leadingIcon 앞 아이콘
 * @param trailingIcon 뒤 아이콘
 * @param onClick chip 클릭 이벤트
 * @param trailingIconClick 뒤 아이콘 클릭 이벤트
 * @returns
 */

const Chip = ({
  text,
  type = "round",
  hierarchy = "secondary",
  leadingIcon,
  trailingIcon,
  onClick,
  trailingIconOnClick,
  ...props
}: IChipProps) => {
  const color = S.getColor(hierarchy, props).color;
  const coloredTrailingIcon =
    trailingIcon && React.isValidElement(trailingIcon) ? React.cloneElement(trailingIcon, { color }) : trailingIcon;

  return (
    <S.ChipContainer type={type} hierarchy={hierarchy} {...props}>
      <S.Left onClick={onClick}>
        {leadingIcon}
        {text}
      </S.Left>
      <div onClick={trailingIconOnClick || onClick}>{coloredTrailingIcon}</div>
    </S.ChipContainer>
  );
};

export default Chip;
