import * as S from "./styles";

interface CheckBoxProps {
  size: "sm" | "md";
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  children?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ size, name, disabled, checked, children, onChange }: CheckBoxProps) => {
  return (
    <S.OutContainer size={size}>
      <S.InnerContainer size={size}>
        <S.Input boxSize={size} type="checkbox" id={name} disabled={disabled} checked={checked} onChange={onChange} />
      </S.InnerContainer>
      <S.Label htmlFor={name} size={size}>
        {children}
      </S.Label>
    </S.OutContainer>
  );
};

export default CheckBox;
