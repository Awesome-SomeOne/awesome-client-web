import * as React from "react";
import { ReactElement, ReactNode } from "react";

import * as S from "./styles";

interface IChipProps {
  text?: string;
  shape?: "round" | "box";
  hierarchy?: "primary" | "secondary";
  leadingIcon?: ReactNode;
  trailingIcon?: ReactElement<{ color?: string }>;
  onChipClick?: () => void;
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
 * @param onChipClick chip 클릭 이벤트
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
  onChipClick,
  trailingIconOnClick,
  disabled = false,
  selected = false,
  ...props
}: IChipProps) => {
  const color = S.getColor({ hierarchy, disabled, selected }).color;
  const coloredTrailingIcon =
    trailingIcon && React.isValidElement(trailingIcon) ? React.cloneElement(trailingIcon, { color }) : trailingIcon;

  const handleTrailingIconClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    trailingIconOnClick && trailingIconOnClick();
  };

  return (
    <S.ChipContainer
      shape={shape}
      hierarchy={hierarchy}
      disabled={disabled}
      selected={selected}
      onClick={onChipClick}
      {...props}
    >
      <S.Left>
        {leadingIcon}
        {text}
      </S.Left>
      {trailingIcon && <div onClick={handleTrailingIconClick}>{coloredTrailingIcon}</div>}
    </S.ChipContainer>
  );
};

export default Chip;
