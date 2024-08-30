import * as React from "react";
import { ReactElement, ReactNode } from "react";

import * as S from "./styles";

interface IChipProps {
  text?: string;
  shape?: "round" | "box";
  hierarchy?: "primary" | "secondary";
  leadingIcon?: ReactNode;
  trailingIcon?: ReactElement<{ color?: string }>;
  onClick?: () => void;
  trailingIconOnClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

/**
 * Chip
 * @param text 텍스트
 * @param shape 모양(round, box)
 * @param hierarchy 계층(primary, secondary)
 * @param leadingIcon 앞 아이콘
 * @param trailingIcon 뒤 아이콘
 * @param onClick chip 클릭 이벤트
 * @param trailingIconClick 뒤 아이콘 클릭 이벤트
 * @param disabled
 * @param selected
 * @returns
 */

const Chip = ({
  text,
  shape = "round",
  hierarchy = "secondary",
  leadingIcon,
  trailingIcon,
  onClick,
  trailingIconOnClick,
  disabled = false,
  selected = false,
  ...props
}: IChipProps) => {
  const color = S.getColor({ hierarchy, disabled, selected }).color;
  const coloredTrailingIcon =
    trailingIcon && React.isValidElement(trailingIcon) ? React.cloneElement(trailingIcon, { color }) : trailingIcon;

  return (
    <S.ChipContainer shape={shape} hierarchy={hierarchy} disabled={disabled} selected={selected} {...props}>
      <S.Left onClick={onClick}>
        {leadingIcon}
        {text}
      </S.Left>
      {trailingIcon && <div onClick={trailingIconOnClick || onClick}>{coloredTrailingIcon}</div>}
    </S.ChipContainer>
  );
};

export default Chip;
