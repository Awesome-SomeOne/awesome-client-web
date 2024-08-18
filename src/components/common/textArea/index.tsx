import { InputHTMLAttributes, useRef, useState } from "react";

import * as S from "./styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder: string;
  disable?: boolean;
  error?: boolean;
  minHeight?: string;
  isShowLength?: boolean;
  maxLength?: number;
}

function TextArea({
  label,
  placeholder,
  disable,
  error,
  minHeight,
  isShowLength = false,
  maxLength,
  ...props
}: TextAreaProps) {
  const [inputValue, setInputValue] = useState("");
  const [hasBlurred, setHasBlurred] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleBlur = () => {
    setHasBlurred(true);
  };

  const adjustHeight = () => {
    const textarea = textAreaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustHeight();
  };

  return (
    <S.OutContainer>
      <S.Label disable={disable} error={error}>
        {label}
      </S.Label>
      <S.TextArea
        ref={textAreaRef}
        placeholder={placeholder}
        disabled={disable}
        error={error}
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
        hasValue={hasBlurred && !!inputValue}
        minHeight={minHeight}
        maxLength={maxLength}
        {...props}
      />
      {isShowLength && maxLength && (
        <S.MaxLengthText>
          {inputValue.length}/{maxLength}
        </S.MaxLengthText>
      )}
    </S.OutContainer>
  );
}

export default TextArea;
