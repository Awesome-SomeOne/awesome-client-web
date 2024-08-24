import { useState } from "react";

import * as S from "./styles";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import { Theme } from "@/styles/theme";

interface IDropdownProps {
  text?: string;
  size?: "sm" | "md";
  selected?: boolean;
  disabled?: boolean;
}

/**
 * Dropdown
 * @param text 텍스트
 * @param size 사이즈(sm, md)
 * @returns
 */

const Dropdown = ({ text, size = "sm", selected, disabled }: IDropdownProps) => {
  const [opened, setOpened] = useState(false);
  const color = getColor({ selected, disabled });
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
