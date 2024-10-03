import { useEffect, useState } from "react";
import TripSchedulePage from "./tripSchedule/TripSchedulePage";
import TripIslandPage from "./tripIsland/TripIslandPage";
import TripThemePage from "./tripTheme/TripThemePage";
import GeneratePlanPage from "./generatePlan/GeneratePlanPage";
import Appbar from "@/components/common/header/Appbar";
import BackIcon from "@/assets/icons/BackIcon";
import ClearIcon from "@/assets/icons/ClearIcon";
import SimpleModal from "@/components/common/simpleModal/index";
import useOverlay from "@/hooks/useOverlay";
import TripIslandSearchPage from "./tripIsland/search/TripIslandSearchPage";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { daysAtom, useResetAtoms } from "@/atoms/myTrip/planAtom";

const MyTripPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => {
    if (recommend && currentStep === 3) {
      setRecommend(false);
    }
    setCurrentStep((prev) => prev - 1);
  };
  const { isOpen, open, close } = useOverlay();

  const [isSearching, setIsSearching] = useState(false);
  const [recommend, setRecommend] = useState(false);

  const [, setDaysAtom] = useAtom(daysAtom);

  const resetPlanAtom = useResetAtoms();

  useEffect(() => {
    if (currentStep < 2) {
      resetPlanAtom();
    }
    if (currentStep < 4) {
      setDaysAtom([]);
    }
  }, [currentStep]);

  const handleRecClick = () => {
    isSearching && setIsSearching(false);
    setRecommend(true);
    setCurrentStep(3);
  };

  return (
    <>
      {!isSearching && (
        <>
          {currentStep < 4 && (
            <div style={{ height: "100%", overflow: "hidden" }}>
              <Appbar
                title="여행 일정 세우기"
                textAlign="center"
                leftIcon={
                  <button onClick={currentStep === 1 ? () => navigate(-1) : prevStep}>
                    <BackIcon />
                  </button>
                }
              />
              {currentStep === 1 && <TripSchedulePage onNext={nextStep} />}
              {currentStep === 2 && (
                <TripIslandPage onNext={nextStep} onSearch={() => setIsSearching(true)} onRecClick={handleRecClick} />
              )}
              {currentStep === 3 && <TripThemePage onPrev={prevStep} onNext={nextStep} isRecommend={recommend} />}
            </div>
          )}

          {currentStep === 4 && (
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
              <GeneratePlanPage />
            </>
          )}

          <SimpleModal
            image="/images/warning.svg"
            title="일정을 만들지 않고 나가시겠습니까?"
            content="지금까지 만든 일정이 전부 지워집니다!"
            firstButtonText="취소"
            secondButtonText="나가기"
            firstButtonOnClick={close}
            secondButtonOnClick={() => {
              close();
              navigate(-1);
              setRecommend(false);
              setDaysAtom([]);
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
