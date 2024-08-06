import { useState } from "react";
import DropdownIcon from "../../../assets/icons/DropdownIcon";
import { Theme } from "../../../styles/theme";
import * as S from "./styles";

interface IDropdownProps {
  text?: string;
  size?: "sm" | "md";
}

/**
 * Dropdown
 * @param text 텍스트
 * @param size 사이즈(sm, md)
 * @returns
 */

const Dropdown = ({ text, size = "sm", ...props }: IDropdownProps) => {
  const [opened, setOpened] = useState(false);
  const color = getColor(props);
  return (
    <S.DropdownContainer size={size} color={color} onClick={() => setOpened(!opened)}>
      <S.DropdownText>{text}</S.DropdownText>
      <DropdownIcon color={color} open={opened} />
    </S.DropdownContainer>
  );
};

const getColor = ({ ...props }) => {
  if (props.selected) {
    return Theme.colors.Label_Primary_Default;
  } else if (props.disabled) {
    return Theme.colors.Label_Disable;
  } else {
    return Theme.colors.Label_Assitive;
  }
};

export default Dropdown;
