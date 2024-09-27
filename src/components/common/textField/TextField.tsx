import { InputHTMLAttributes, useState } from "react";
import { Control, useController } from "react-hook-form";

import * as S from "./styles";

type Size = "sm" | "lg";

interface TextFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "label" | "placeholder" | "disable" | "error" | "control" | "name"
  > {
  size: Size;
  label: string;
  placeholder: string;
  disable?: boolean;
  error?: boolean;
  control: Control<any>;
  name: string;
  defaultValue?: string;
}

function TextField({ size, label, placeholder, disable, error, control, name, ...props }: TextFieldProps) {
  const [hasBlurred, setHasBlurred] = useState(false);
  const {
    field: { onChange, onBlur, value }
  } = useController({
    name,
    control
  });

  return (
    <S.OutContainer size={size}>
      <S.Label disable={disable} error={error}>
        {label}
      </S.Label>
      <S.Input
        placeholder={placeholder}
        disabled={disable}
        error={error}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        hasValue={hasBlurred && !!value}
        {...props}
      />
    </S.OutContainer>
  );
}

export default TextField;
