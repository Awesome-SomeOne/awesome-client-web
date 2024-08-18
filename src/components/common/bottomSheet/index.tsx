import { AnimatePresence } from "framer-motion";

import * as S from "./styles";
import Portal from "../portal";

interface IBottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  close: () => void;
}

const BottomSheet = ({ children, isOpen, close }: IBottomSheetProps) => {
  const previewVariants = {
    hidden: { y: 200 },
    visible: { y: 0 },
    exit: { y: 200 }
  };

  const transition = {
    type: "spring",
    damping: 40,
    stiffness: 400,
    duration: 0.2
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <S.BackDrop onClick={close} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <S.BottomSheetContainer
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={previewVariants}
              transition={transition}
            >
              {children}
            </S.BottomSheetContainer>
          </S.BackDrop>
        </Portal>
      )}
    </AnimatePresence>
  );
};
export default BottomSheet;
