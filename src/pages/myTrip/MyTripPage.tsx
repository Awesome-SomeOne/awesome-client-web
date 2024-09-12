import Button from "../../components/common/button/index";
import * as S from "./styles";
import { useState } from "react";
import MyTripSchedulePage from "./tripSchedule/TripSchedulePage";
import MyTripIslandPage from "./tripIsland/TripIslandPage";
import MyTripThemePage from "./tripTheme/TripThemePage";
import GeneratePlanPage from "./generatePlan/GeneratePlanPage";
import Appbar from "@/components/common/header/Appbar";
import BackIcon from "@/assets/icons/BackIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import SimpleModal from "@/components/common/simpleModal/index";
import useOverlay from "@/hooks/useOverlay";
import TripIslandSearchPage from "./tripIsland/search/TripIslandSearchPage";
import { Place } from "@/types/myTrip";

const MyTripPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlaces, setSelectedPlaces] = useState<Place[]>([]);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => {
    if (recommend && currentStep === 4) {
      setRecommend(false);
    }
    setCurrentStep((prev) => prev - 1);
  };
  const { isOpen, open, close } = useOverlay();

  const [isSearching, setIsSearching] = useState(false);
  const [recommend, setRecommend] = useState(false);

  const handleRecClick = () => {
    isSearching && setIsSearching(false);
    setRecommend(true);
    setCurrentStep(4);
  };

  return (
    <>
      {!isSearching && (
        <>
          {currentStep === 1 && (
            <S.MyTripLayout>
              <img src="/src/assets/images/plane.svg" />
              <S.TextSection>
                <S.Title>섬으로 여행하실 건가요?</S.Title>
                <S.Paragraph>여행 장소를 직접 선택하거나, 추천 받고 일정을 세워봐요!</S.Paragraph>
              </S.TextSection>
              <Button text="여행 일정 세우기" size="lg" onClick={nextStep} style={{ width: "137px" }} />
            </S.MyTripLayout>
          )}
          {currentStep > 1 && currentStep < 5 && (
            <div style={{ height: "100%", overflow: "hidden" }}>
              <Appbar
                title="여행 일정 세우기"
                textAlign="center"
                leftIcon={
                  <button onClick={prevStep}>
                    <BackIcon />
                  </button>
                }
              />
              {currentStep === 2 && <MyTripSchedulePage onNext={nextStep} />}
              {currentStep === 3 && (
                <MyTripIslandPage onNext={nextStep} onSearch={() => setIsSearching(true)} onRecClick={handleRecClick} />
              )}
              {currentStep === 4 && (
                <MyTripThemePage
                  onPrev={prevStep}
                  onNext={nextStep}
                  isRecommend={recommend}
                  setSelectedPlaces={setSelectedPlaces}
                />
              )}
            </div>
          )}

          {currentStep === 5 && (
            <>
              <Appbar
                title=""
                textAlign="center"
                rightIcon1={
                  <button onClick={open}>
                    <ClearIcon size="28" />
                  </button>
                }
              />
              <GeneratePlanPage recommended={selectedPlaces} />
            </>
          )}

          <SimpleModal
            image="/src/assets/images/warning.svg"
            title="일정을 만들지 않고 나가시겠습니까?"
            content="지금까지 만든 일정이 전부 지워집니다!"
            firstButtonText="취소"
            secondButtonText="나가기"
            firstButtonOnClick={close}
            secondButtonOnClick={() => {
              close();
              setCurrentStep(1);
              setRecommend(false);
              setSelectedPlaces([]);
            }}
            isOpen={isOpen}
            close={close}
          />
        </>
      )}
      {isSearching && (
        <TripIslandSearchPage
          onNext={() => {
            nextStep();
            setIsSearching(false);
          }}
          onClose={() => setIsSearching(false)}
          onRecClick={handleRecClick}
        />
      )}
    </>
  );
};

export default MyTripPage;
