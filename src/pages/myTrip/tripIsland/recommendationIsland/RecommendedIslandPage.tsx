import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import { Suspense, useState } from "react";
import { Place } from "@/types/myTrip";
import * as S from "./styles";
import { useGetRecommendIsland, useGetRecommendPlace } from "@/apis/myTrip/myTrip.queries";
import { useAtom } from "jotai";
import { islandIdAtom, planNameAtom, recommendedPlacesAtom } from "@/atoms/myTrip/planAtom";
import ErrorBoundary from "@/hooks/Errorboundary";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import Chip from "@/components/common/chip/index";

const RecommendedIsland = ({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) => {
  const [step, setStep] = useState(1);
  const [selectedPlaces, setLocalSelectedPlaces] = useState<Place[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_LIST[0]);

  const { data: recommendIsland } = useGetRecommendIsland();

  const islandId = recommendIsland?.id;
  const { data: recommendPlaceList = [] } = useGetRecommendPlace({ islandId: islandId, category: selectedCategory });

  const [, setIslandId] = useAtom(islandIdAtom);
  const [theme] = useAtom(planNameAtom);
  const [, setRecommendedPlaces] = useAtom(recommendedPlacesAtom);

  const handleSelect = () => {
    // 섬 선택 처리
    setIslandId(islandId);
    setStep(2);
  };

  const handleNext = () => {
    if (selectedPlaces.length > 0) {
      // 선택한 장소 있을 때
      setRecommendedPlaces(selectedPlaces);
      onNext();
    } else {
      // 선택한 장소 없을 때
      onNext();
    }
  };

  return (
    <>
      {step === 1 && (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <GeneralHeader title="추천 섬" description={`{${theme}} 테마에 맞는 섬을 추천해드릴게요!`} titleSize="md" />
          <S.IslandCard src={recommendIsland.img_url}>
            <S.TextContainer>
              <S.IslandName>{recommendIsland?.islandName}</S.IslandName>
              <S.IslandAddress>{recommendIsland?.address}</S.IslandAddress>
            </S.TextContainer>
            <S.Credit>{ISLAND_LIST.find((island) => island.name === recommendIsland.islandName)?.credit}</S.Credit>
          </S.IslandCard>
          <S.ButtonContainer>
            <Button text="일정에 추가하기" size="lg" onClick={handleSelect} />
            <S.TextButton onClick={onPrev}>섬 직접 선택하기</S.TextButton>
          </S.ButtonContainer>
        </div>
      )}
      {step === 2 && (
        <>
          <GeneralHeader
            title="추천 장소"
            description={`{${theme}} 테마에 맞는 장소를 추천해드릴게요!`}
            spacingSize="sm"
            titleSize="md"
          />
          <S.ChipRow>
            {CATEGORY_LIST.map((category) => (
              <Chip
                text={category}
                hierarchy="primary"
                selected={selectedCategory === category}
                onChipClick={() => setSelectedCategory(category)}
              />
            ))}
          </S.ChipRow>
          <S.ListContainer>
            {recommendPlaceList.map((place: any, index: number) => (
              <ListComponent
                key={index}
                place={place}
                onClick={() => {
                  if (selectedPlaces.some((p) => p.id === place.id)) {
                    setLocalSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
                  } else {
                    setLocalSelectedPlaces([...selectedPlaces, place]);
                  }
                }}
                checkbox
                selected={!!selectedPlaces.some((p) => p.id === place.id)}
              />
            ))}
          </S.ListContainer>
          <S.ButtonContainer>
            <Button
              text={
                selectedPlaces.length > 0 ? `총 ${selectedPlaces.length}개 일정에 추가하기` : "선택 안하고 넘어가기"
              }
              size="lg"
              onClick={handleNext}
            />
          </S.ButtonContainer>
        </>
      )}
    </>
  );
};

const RecommendedIslandPage = ({
  ...props
}: {
  onPrev: () => void;
  onNext: () => void;
  setSelectedPlaces: (selectedPlaces: Place[]) => void;
}) => {
  return (
    <div
      style={{
        height: "100%",
        paddingTop: "56px",
        overflow: "hidden"
      }}
    >
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <RecommendedIsland {...props} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default RecommendedIslandPage;
