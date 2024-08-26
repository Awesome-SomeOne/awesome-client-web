import { AnimatePresence, PanInfo } from "framer-motion";
import { useEffect, useState } from "react";

import Portal from "../portal";
import * as S from "./styles";

interface IBottomSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  close: () => void;
  hasHandleBar?: boolean;
  hasBackdrop?: boolean;
}

const BottomSheet = ({
  children,
  isOpen,
  close,
  style,
  hasHandleBar = false,
  hasBackdrop = true
}: IBottomSheetProps) => {
  const [height, setHeight] = useState("50%");

  const handleDrag = (event: MouseEvent | PointerEvent | TouchEvent, info: PanInfo) => {
    if (info.offset.y > 100) {
      close();
    } else if (info.offset.y < -100) {
      setHeight("100vh");
    }
  };

  const previewVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
    exit: { y: "100%" }
  };

  const transition = {
    type: "spring",
    damping: 30,
    stiffness: 300
  };

  useEffect(() => {
    if (!isOpen) {
      setHeight("50%");
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal>
          <S.BackDrop
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ backgroundColor: hasBackdrop ? "rgba(0, 0, 0, 0.5)" : "transparent" }}
          />
          <S.BottomSheetContainer
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={previewVariants}
            transition={transition}
            style={{ ...style, transition: "height 0.5s ease-in-out", height }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDrag}
          >
            {hasHandleBar && <S.BottomSheetHandleBar />}
            {children}
          </S.BottomSheetContainer>
        </Portal>
      )}
    </AnimatePresence>
  );
};
export default BottomSheet;
