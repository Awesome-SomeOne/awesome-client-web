import { useEffect, useRef, useState } from "react";

import * as S from "./styles";
import Button from "../button/index";

interface ISearchBarProps {
  autoFocus?: boolean;
  placeholder?: string;
  buttonText?: string;
  value?: string;
  onSubmit?: (value: string) => void;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showBackIcon?: boolean;
  BackIconOnClick?: () => void;
}

/**
 * SearchBar
 * @param autoFocus 검색창 autoFocus (기본 true)
 * @param placeholder 검색창 placeholder
 * @buttonText 검색 버튼 텍스트
 * @param onSubmit 입력된 검색어를 전달합니다.
 * @param onChange 입력된 검색어를 전달합니다.
 * @param onFocus
 * @param onBlur
 * @param showBackIcon
 * @param BackIconOnClick
 * @returns
 */

const SearchBar = ({
  autoFocus = true,
  placeholder = "검색내용을 입력해주세요",
  buttonText = "검색",
  value: externalValue = "",
  onSubmit,
  onChange,
  onFocus,
  onBlur,
  showBackIcon,
  BackIconOnClick,
  ...props
}: ISearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState(externalValue);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue]);

  useEffect(() => {
    if (value && isTyping) setShowButton(true);
    else setShowButton(false);
  }, [value, isTyping]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const handleInputFocus = () => {
    setIsTyping(true);
    onFocus && onFocus();
  };

  const handleInputBlur = () => {
    setIsTyping(false);
    onBlur && onBlur();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) {
      return;
    }
    inputRef.current?.blur();
    onSubmit && onSubmit(value);
  };

  return (
    <S.SearchLayout>
      {showBackIcon && <S.BackIcon src="/src/assets/icons/BackIcon.svg" onClick={BackIconOnClick} />}
      <S.SearchField isFocused={isTyping} isFilled={!!value} onSubmit={handleSubmit} {...props}>
        <S.SearchInput
          ref={inputRef}
          autoFocus={autoFocus}
          type="text"
          value={value}
          placeholder={placeholder}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
        {showButton && <Button text={buttonText} type="submit" style={{ height: "32px" }} />}
      </S.SearchField>
    </S.SearchLayout>
  );
};

export default SearchBar;
