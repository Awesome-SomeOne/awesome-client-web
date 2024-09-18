import { useEffect, useRef, useState } from "react";
import BottomSheet from "@/components/common/bottomSheet/index";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import InputComponent from "@/components/myTrip/inputComponent/index";
import RecommendedIsland from "../tripIsland/recommendationIsland/RecommendedIsland";
import * as S from "./styles";
import { Place } from "@/types/myTrip";
import { THEME_LIST } from "@/constants/myTripPageConstants";
import { useAtom } from "jotai";
import { planNameAtom } from "@/atoms/myTrip/planAtom";

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
  const [, setPlanName] = useAtom(planNameAtom);

  const handleThemeClick = (event: any) => {
    if (event.target.children.length === 0) {
      let theme = event.target.innerText;
      if (theme === "직접 입력") {
        setShowInput(true);
        setSelectedTheme("");
      } else {
        setSelectedTheme(theme);
        setPlanName(theme);
      }
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [showInput]);

  const handleNext = () => {
    // 섬 선택 처리하기
    if (recommend) setRecommended(true);
    else onNext();
  };

  const handleSubmit = (value: string) => {
    // 입력한 여행 목적 저장하기
    setPlanName(value);
    // 일정 세우기로 넘어가기
    handleNext();
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
            overflow: "scroll",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <GeneralHeader
            title="여행 목적을 선택해주세요"
            description="선택을 기반으로 관광 명소를 추천해드려요"
            titleSize="md"
          />
          <div style={{ flexGrow: 1 }}>
            <S.BoxContainer onClick={handleThemeClick}>
              {THEME_LIST.filter((theme) => !recommend || theme.name !== "직접 입력") // 추천 페이지인 경우 '직접 입력' 제외
                .map((theme) => (
                  <S.Box key={theme.id} selected={selectedTheme === theme.name}>
                    {theme.name}
                  </S.Box>
                ))}
            </S.BoxContainer>
          </div>

          <Button
            text="선택완료"
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
            size="lg"
            disabled={!selectedTheme}
            onClick={handleNext}
          />
          <BottomSheet isOpen={showInput} close={() => setShowInput(false)}>
            <InputComponent inputRef={inputRef} handleSubmit={handleSubmit} />
          </BottomSheet>
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

export default TripThemePage;
