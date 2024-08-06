import { AnimatePresence } from "framer-motion";
import Button from "../button";
import Portal from "../portal";
import * as S from "./styles";

interface ISimpleModalProps {
  image?: string;
  title: string;
  content?: string;
  extraContent?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  firstButtonOnClick?: () => void;
  secondButtonOnClick?: () => void;
  isVertical?: boolean;
  isFilled?: boolean;
  isOpen: boolean;
  close: () => void;
}

const SimpleModal = ({
  image,
  title,
  content,
  extraContent,
  firstButtonText,
  secondButtonText,
  firstButtonOnClick,
  secondButtonOnClick,
  isVertical,
  isFilled,
  isOpen,
  close
}: ISimpleModalProps) => {
  const previewVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
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
            <S.SimpleModalContainer
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={previewVariants}
              transition={transition}
            >
              <S.ContentContainer>
                <S.ImageWrapper src={image} />
                <S.TextWrapper>
                  <S.Text className="title">{title}</S.Text>
                  {content && <S.Text className="content">{content}</S.Text>}
                  {extraContent && <S.Text className="extraContent">{extraContent}</S.Text>}
                </S.TextWrapper>
              </S.ContentContainer>
              {isVertical ? (
                <S.ButtonWrapper is_vertical={isVertical}>
                  {firstButtonText && <Button size="lg" text={firstButtonText} onClick={firstButtonOnClick} />}
                  {secondButtonText &&
                    (isFilled ? (
                      <Button size="lg" isTertiaryButton text={secondButtonText} onClick={secondButtonOnClick} />
                    ) : (
                      <S.TextButton>{secondButtonText}</S.TextButton>
                    ))}
                </S.ButtonWrapper>
              ) : (
                <S.ButtonWrapper is_vertical={isVertical}>
                  {firstButtonText && (
                    <Button size="lg" isTertiaryButton text={firstButtonText} onClick={firstButtonOnClick} />
                  )}
                  {secondButtonText && <Button size="lg" text={secondButtonText} onClick={secondButtonOnClick} />}
                </S.ButtonWrapper>
              )}
            </S.SimpleModalContainer>
          </S.BackDrop>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default SimpleModal;
