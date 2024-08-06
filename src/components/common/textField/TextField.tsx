import { useState } from "react";
import * as S from "./styles";

type Size = "sm" | "lg";

interface TextFieldProps {
  size: Size;
  label: string;
  placeholder: string;
  disable?: boolean;
  error?: boolean;
}

function TextField({ size, label, placeholder, disable, error }: TextFieldProps) {
  const [inputValue, setInputValue] = useState("");
  const [hasBlurred, setHasBlurred] = useState(false);

  const handleBlur = () => {
    setHasBlurred(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <S.OutContainer size={size}>
      <S.Label disable={disable} error={error}>
        {label}
      </S.Label>
      <S.Input
        placeholder={placeholder}
        disabled={disable}
        error={error}
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
        hasValue={hasBlurred && !!inputValue}
      />
    </S.OutContainer>
  );
}

export default TextField;
