import { useEffect, useRef, useState } from "react";

import * as S from "./styles";
import Button from "../button/index";

interface ISearchBarProps extends React.HTMLAttributes<HTMLFormElement> {
  autoFocus?: boolean;
  placeholder?: string;
  buttonText?: string;
  value?: string;
  onSearch?: (value: string) => void;
  onValueChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  showBackIcon?: boolean;
  BackIconOnClick?: () => void;
}

/**
 * SearchBar
 * @param autoFocus 검색창 autoFocus (기본 true)
 * @param placeholder 검색창 placeholder ("검색내용을 입력해주세요")
 * @buttonText 검색 버튼 텍스트 ("검색")
 * @param onSearch 검색할 때
 * @param onValueChange 검색창 값 바뀔 때
 * @param onFocus 검색창 focus 상태일 때
 * @param onBlur 검색창 blur 상태일 때
 * @param showBackIcon 뒤로가기 아이콘 (검색창 왼쪽)
 * @param BackIconOnClick 뒤로가기 아이콘 눌렀을 때
 * @returns
 */

const SearchBar = ({
  autoFocus = true,
  placeholder = "검색내용을 입력해주세요",
  buttonText = "검색",
  value: externalValue = "",
  onSearch,
  onValueChange,
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
    onValueChange && onValueChange(event.target.value);
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
    onSearch && onSearch(value);
  };

  return (
    <S.SearchLayout>
      {showBackIcon && <img src="/icons/BackIcon.svg" onClick={BackIconOnClick} />}
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
