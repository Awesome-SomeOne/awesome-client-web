import { useEffect, useState } from "react";

import * as S from "./styles";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import { Theme } from "@/styles/theme";

interface IDropdownProps {
  text?: string;
  text2?: string;
  content?: string;
  size?: "sm" | "md";
  open?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

/**
 * Dropdown
 * @param text 텍스트
 * @param text2 열렸을 때 텍스트
 * @param content 열렸을 때 보이는 내용
 * @param size 사이즈(sm, md)
 * @param open 클릭 없이 열림/닫힘 상태 변경 필요할 때 사용
 * @param selected
 * @param disabled
 * @returns
 */

const Dropdown = ({ text, text2, content, size = "sm", open = false, selected, disabled }: IDropdownProps) => {
  const [opened, setOpened] = useState(open);
  const color = getColor({ selected, disabled });

  useEffect(() => {
    setOpened(open);
  }, [open]);

  return (
    <>
      <S.DropdownContainer size={size} color={color} onClick={() => setOpened(!opened)}>
        <S.DropdownText>{opened ? text2 || text : text}</S.DropdownText>
        <DropdownIcon color={color} open={opened} />
      </S.DropdownContainer>
      {content && opened && <S.DropdownContent>{content}</S.DropdownContent>}
    </>
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
