import { useState } from "react";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import * as S from "./styles";
import { useAtom } from "jotai";
import { islandIdAtom } from "@/atoms/myTrip/planAtom";

const TripIslandPage = ({
  onNext,
  onSearch,
  onRecClick
}: {
  onNext: () => void;
  onSearch: () => void;
  onRecClick: () => void;
}) => {
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [, setIslandId] = useAtom(islandIdAtom);

  const handleIslandClick = (event: any) => {
    if (event.target.children.length === 0) {
      const islandName = event.target.innerText;
      setSelectedIsland(islandName);
    }
  };

  const handleClick = () => {
    const islandId = ISLAND_LIST.find((island) => island.name === selectedIsland)?.id || null;
    setIslandId(islandId);
    onNext();
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          paddingTop: "56px",
          display: "flex",
          flexDirection: "column",
          overflow: "scroll"
        }}
      >
        <GeneralHeader
          title="여행하고 싶은 섬을 선택해주세요"
          description="검색으로 더 많은 섬을 찾을 수 있어요"
          titleSize="md"
        />
        <S.SearchBar onClick={onSearch}>가고 싶은 섬을 검색해주세요</S.SearchBar>
        <S.BoxContainer onClick={handleIslandClick}>
          {ISLAND_LIST.map((island) => (
            <S.Box key={island.id} selected={selectedIsland === island.name} bgUrl={"/src/assets/images/island.png"}>
              {island.name}
            </S.Box>
          ))}
        </S.BoxContainer>
        <S.SpanContainer>
          <S.Text>어떤 섬을 여행하고 싶은지 모를 땐?</S.Text>
          <S.TextButton onClick={onRecClick}>추천 받기</S.TextButton>
        </S.SpanContainer>
        <Button
          text="선택완료"
          style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
          size="lg"
          disabled={!selectedIsland}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default TripIslandPage;
