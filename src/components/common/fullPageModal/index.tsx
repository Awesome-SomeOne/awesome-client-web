import { PropsWithChildren } from "react";

import Appbar from "../header/Appbar";
import Clear from "@/assets/icons/Clear";

import Portal from "../portal";
import * as S from "./styles";

interface FullPageModalProps extends PropsWithChildren {
  title?: string;
  isOpen?: boolean;
  close: () => void;
}

const FullPageModal = ({ children, close, title = "" }: FullPageModalProps) => {
  return (
    <Portal>
      <S.FullPageModalContainer>
        <Appbar
          title={title}
          textAlign="center"
          rightIcon1={
            <button
              onClick={() => {
                close();
              }}
            >
              <Clear />
            </button>
          }
        />
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.FullPageModalContainer>
    </Portal>
  );
};

export default FullPageModal;
