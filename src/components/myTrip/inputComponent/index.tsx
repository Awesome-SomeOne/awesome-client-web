import { useState } from "react";
import * as S from "./styles";

const InputComponent = ({
  inputRef,
  handleSubmit
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  handleSubmit: (value: string) => void;
}) => {
  const [charCount, setCharCount] = useState(0);
  const max = 25;
  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };
  return (
    <S.InputContainer>
      <S.TextField
        onClick={(event: any) => event.stopPropagation()}
        onSubmit={(event: any) => {
          event.preventDefault();
          if (inputRef.current) {
            handleSubmit(inputRef.current.value);
          }
        }}
      >
        <S.TextInput
          ref={inputRef}
          type="text"
          placeholder="여행 목적을 작성해주세요"
          onChange={handleInputChange}
          maxLength={max}
        />
        <S.TextButton
          disabled={!charCount}
          onClick={() => {
            if (inputRef.current) {
              handleSubmit(inputRef.current.value);
            }
          }}
        >
          작성
        </S.TextButton>
      </S.TextField>
      <S.Counter>{`${charCount}/25`}</S.Counter>
    </S.InputContainer>
  );
};

export default InputComponent;
