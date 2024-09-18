import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import { useState } from "react";
import { Place } from "@/types/myTrip";
import * as S from "./styles";
import { useGetRecommendIsland, useGetRecommendPlace } from "@/apis/myTrip/myTrip.queries";

const RecommendedIsland = ({
  theme,
  onPrev,
  onNext,
  setSelectedPlaces
}: {
  theme: string;
  onPrev: () => void;
  onNext: () => void;
  setSelectedPlaces: (selectedPlaces: Place[]) => void;
}) => {
  const [recommendPlace, setRecommendPlace] = useState<Place[]>([]);
  const [selectedPlaces, setLocalSelectedPlaces] = useState<Place[]>([]);

  const { data: recommendIsland, isFetching } = useGetRecommendIsland();

  const islandId = recommendIsland?.id;
  const category = theme;
  const {
    data: recommendPlaceList = [
      {
        id: 1,
        name: "aaa",
        address: "a1",
        category: "식당",
        x_address: "126.795841",
        y_address: "33.55635"
      }
    ]
  } = useGetRecommendPlace({ islandId: islandId, category: category });

  const handleSelect = () => {
    // 추천 장소 불러오기
    setRecommendPlace(recommendPlaceList);
  };

  const handleNext = () => {
    if (selectedPlaces.length > 0) {
      // 선택한 장소 있을 때
      setSelectedPlaces(selectedPlaces);
      onNext();
    } else {
      // 선택한 장소 없을 때
      onNext();
    }
  };
  if (isFetching) return <>fetching...</>;
  return (
    <div
      style={{
        height: "100%",
        paddingTop: "56px",
        overflow: "hidden"
      }}
    >
      {recommendPlace.length === 0 && (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <GeneralHeader
            title="최대여덟글자님을 위한 추천 섬"
            description={`{${theme}} 테마에 맞는 섬을 추천해드릴게요!`}
            titleSize="md"
          />
          <S.IslandCard src={"/src/assets/images/place.png"}>
            <S.TextContainer>
              <S.IslandName>{recommendIsland?.islandName}</S.IslandName>
              <S.IslandAddress>{recommendIsland?.address}</S.IslandAddress>
            </S.TextContainer>
          </S.IslandCard>
          <S.ButtonContainer>
            <Button text="일정에 추가하기" size="lg" onClick={handleSelect} />
            <S.TextButton onClick={onPrev}>섬 직접 선택하기</S.TextButton>
          </S.ButtonContainer>
        </div>
      )}
      {recommendPlace.length > 0 && (
        <>
          <GeneralHeader
            title="추천 장소"
            description={`{${theme}} 테마에 맞는 장소를 추천해드릴게요!`}
            spacingSize="sm"
            titleSize="md"
          />
          <S.ListContainer>
            {recommendPlace.map((place, index) => (
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
    </div>
  );
};

export default RecommendedIsland;
