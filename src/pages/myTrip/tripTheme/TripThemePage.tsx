import { useEffect, useRef, useState } from "react";
import BottomSheet from "@/components/common/bottomSheet/index";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import RecommendedIsland from "../tripIsland/recommendationIsland/RecommendedIsland";
import * as S from "./styles";
import { Place } from "@/types/myTrip";
import { THEME_LIST } from "@/constants/myTripPageConstants";

const TripThemePage = ({
  onPrev,
  onNext,
  isRecommend = false,
  setSelectedPlaces
}: {
  onPrev: () => void;
  onNext: () => void;
  isRecommend: boolean;
  setSelectedPlaces: (selectedPlaces: Place[]) => void;
}) => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [recommend, setRecommend] = useState(isRecommend);
  const [recommended, setRecommended] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleThemeClick = (event: any) => {
    if (event.target.children.length === 0) {
      let theme = event.target.innerText;
      if (theme === "직접 입력") {
        setShowInput(true);
        setSelectedTheme("");
      } else {
        setSelectedTheme(theme);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [showInput]);

  const handleSelect = () => {
    // 섬 선택 처리하기
    if (recommend) setRecommended(true);
    else onNext();
  };

  const handleSubmit = (value: string) => {
    // 입력한 여행 목적 저장하기
    console.log(value);
    // 일정 세우기로 넘어가기
    handleSelect();
  };

  const handlePrev = () => {
    setRecommend(false);
    onPrev();
  };

  return (
    <>
      {!recommended ? (
        <div
          style={{
            height: "100%",
            paddingTop: "56px",
            position: "relative",
            overflow: "scroll"
          }}
        >
          <GeneralHeader
            title="여행 목적을 선택해주세요"
            description="선택을 기반으로 관광 명소를 추천해드려요"
            titleSize="md"
          />
          <S.BoxContainer onClick={handleThemeClick}>
            {THEME_LIST.filter((theme) => !recommend || theme.name !== "직접 입력") // 추천 페이지인 경우 '직접 입력' 제외
              .map((theme) => (
                <S.Box key={theme.id} selected={selectedTheme === theme.name}>
                  {theme.name}
                </S.Box>
              ))}
          </S.BoxContainer>
          <Button
            text="선택완료"
            style={{ width: "calc(100% - 40px)", margin: "8px 20px", position: "absolute", bottom: "0" }}
            size="lg"
            disabled={!selectedTheme}
            onClick={handleSelect}
          />
          <BottomSheet
            children={<InputComponent inputRef={inputRef} handleSubmit={handleSubmit} />}
            isOpen={showInput}
            close={() => setShowInput(false)}
          />
        </div>
      ) : (
        recommend && (
          <RecommendedIsland
            theme={selectedTheme}
            onPrev={handlePrev}
            onNext={onNext}
            setSelectedPlaces={setSelectedPlaces}
          />
        )
      )}
    </>
  );
};

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
        onSubmit={() => {
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

export default TripThemePage;
