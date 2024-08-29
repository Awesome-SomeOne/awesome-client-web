import { useEffect, useState } from "react";

import * as S from "./styles";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import { Theme } from "@/styles/theme";

interface IDropdownProps {
  text?: string;
  size?: "sm" | "md";
  open?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

/**
 * Dropdown
 * @param text 텍스트
 * @param size 사이즈(sm, md)
 * @param open 열림/닫힘 상태
 * @param selected
 * @param disabled
 * @returns
 */

const Dropdown = ({ text, size = "sm", open, selected, disabled }: IDropdownProps) => {
  const [opened, setOpened] = useState(open);
  const color = getColor({ selected, disabled });

  useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <S.DropdownContainer size={size} color={color} onClick={() => setOpened(!opened)}>
      <S.DropdownText>{text}</S.DropdownText>
      <DropdownIcon color={color} open={opened} />
    </S.DropdownContainer>
  );
};

const getColor = ({ selected, disabled }: IDropdownProps) => {
  if (selected) {
    return Theme.colors.Label_Primary_Default;
  } else if (disabled) {
    return Theme.colors.Label_Disable;
  } else {
    return Theme.colors.Label_Assitive;
  }
};

export default Dropdown;
