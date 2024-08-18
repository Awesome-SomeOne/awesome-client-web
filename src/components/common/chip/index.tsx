import * as React from "react";
import { ReactNode } from "react";

import * as S from "./styles";

interface IChipProps {
  text?: string;
  type?: "round" | "box";
  hierarchy?: "primary" | "secondary";
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
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
 * @returns
 */

const Chip = ({ text, type = "round", hierarchy = "secondary", leadingIcon, trailingIcon, ...props }: IChipProps) => {
  const color = S.getColor(hierarchy, props).color;
  const coloredLeadingIcon =
    leadingIcon && React.isValidElement(leadingIcon) ? React.cloneElement(leadingIcon, { color }) : leadingIcon;
  const coloredTrailingIcon =
    trailingIcon && React.isValidElement(trailingIcon) ? React.cloneElement(trailingIcon, { color }) : trailingIcon;

  return (
    <S.ChipContainer type={type} hierarchy={hierarchy} {...props}>
      {coloredLeadingIcon}
      {text}
      {coloredTrailingIcon}
    </S.ChipContainer>
  );
};

export default Chip;
