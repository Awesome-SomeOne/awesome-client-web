import { InputHTMLAttributes, useRef } from "react";
import { Control, useController } from "react-hook-form";

import * as S from "./styles";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  placeholder: string;
  disable?: boolean;
  error?: boolean;
  minHeight?: string;
  isShowLength?: boolean;
  maxLength?: number;
  control: Control<any>;
  name: string;
}

function TextArea({
  label,
  placeholder,
  disable,
  error,
  minHeight,
  isShowLength = false,
  maxLength,
  control,
  name,
  ...props
}: TextAreaProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { isTouched }
  } = useController({
    name,
    control
  });

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const textarea = textAreaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    adjustHeight();
  };

  return (
    <S.OutContainer>
      <S.Label disable={disable} error={error}>
        {label}
      </S.Label>
      <S.TextArea
        // ref={(e) => {
        //   ref(e);
        //   textAreaRef.current = e;
        // }}
        placeholder={placeholder}
        disabled={disable}
        error={error}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        hasValue={isTouched && !!value}
        minHeight={minHeight}
        maxLength={maxLength}
        {...props}
      />
      {isShowLength && maxLength && (
        <S.MaxLengthText>
          {value.length}/{maxLength}
        </S.MaxLengthText>
      )}
    </S.OutContainer>
  );
}

export default TextArea;
