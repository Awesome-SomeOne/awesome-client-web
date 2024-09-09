import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import { useState } from "react";
import { PlaceType } from "../../editPlan/EditPlanPage";
import * as S from "./styles";

const RecommendedIsland = ({
  theme,
  onPrev,
  onNext,
  setSelectedPlaces
}: {
  theme: string;
  onPrev: () => void;
  onNext: () => void;
  setSelectedPlaces: (selectedPlaces: PlaceType[]) => void;
}) => {
  const [recommendPlace, setRecommendPlace] = useState<PlaceType[]>([]);
  const [selectedPlaces, setLocalSelectedPlaces] = useState<PlaceType[]>([]);

  const handleSelect = () => {
    // 추천 장소 불러오기
    setRecommendPlace([
      {
        id: 0,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 1,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 2,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 3,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 4,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 5,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      },
      {
        id: 6,
        name: "산선암",
        address: "경상북도 울릉도",
        image: "/src/assets/images/place.png"
      }
    ]);
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
              <S.IslandName>{"울릉도"}</S.IslandName>
              <S.IslandAddress>{"경상북도 울릉도"}</S.IslandAddress>
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
            description={`{${theme}} 테마에 맞는 섬을 추천해드릴게요!`}
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
