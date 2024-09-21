/**
 * 공통 컴포넌트 - ToggleButton
 * @Author 백선우
 */

import { useState } from "react";
import * as S from "./styles";

interface ToggleButtonProps {
  on: boolean;
  disable: boolean;
  onPress?: () => void;
}

const ToggleButton = ({ on, disable, onPress }: ToggleButtonProps) => {
  const [status, setStatus] = useState(on);

  function toggleClickHandler() {
    if (!disable) {
      setStatus(!status);
      if (onPress) {
        onPress();
      }
    }
  }

  return (
    <S.OutContainer on={status} disable={disable} onClick={toggleClickHandler}>
      <S.InnerCircle on={status} disable={disable} />
    </S.OutContainer>
  );
};

export default ToggleButton;
