import { useState } from "react";
import ClearIcon from "@/assets/icons/ClearIcon";
import Button from "@/components/common/button/index";
import Divider from "@/components/common/divider/index";
import Appbar from "@/components/common/header/Appbar";
import SearchBar from "@/components/common/searchBar/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import { Place } from "@/types/myTrip";
import { NoResult } from "@/components/search/noResult/index";
import * as S from "./styles";
import { useAtom } from "jotai";
import { islandIdAtom } from "@/atoms/myTrip/planAtom";
import { useSearchIsland } from "@/apis/myTrip/myTrip.queries";

const TripIslandSearchPage = ({
  onNext,
  onClose,
  onRecClick
}: {
  onNext: () => void;
  onClose: () => void;
  onRecClick: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIsland, setSelectedIsland] = useState<Place | null>(null);
  const [, setIslandId] = useAtom(islandIdAtom);

  const { data: searchResult = [] } = useSearchIsland({ keyword: searchQuery });

  const handleSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputChange = (value: string) => {
    setSelectedIsland(null);
    setSearchQuery(value);
  };

  const handleSelectDone = () => {
    setIslandId(2);
    onNext();
  };

  return (
    <>
      <div
        style={{
          height: "100%",
          paddingTop: "56px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Appbar
          title="섬 검색하기"
          textAlign="center"
          rightIcon1={
            <div onClick={onClose}>
              <ClearIcon size="28" />
            </div>
          }
        />
        <SearchBar value={searchQuery} onValueChange={handleInputChange} onSearch={handleSubmit} />
        <Divider size="sm" />
        <S.Container>
          <S.ResultContainer>
            {searchResult.length > 0 &&
              searchResult.map((place: Place, index: number) => (
                <ListComponent
                  key={index}
                  place={place}
                  onClick={() => setSelectedIsland(place)}
                  selected={!!(selectedIsland && selectedIsland.id === place.id)}
                />
              ))}
          </S.ResultContainer>
          {searchQuery && searchResult.length === 0 && <NoResult />}
          {selectedIsland ? (
            <Button
              text="선택완료"
              style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
              size="lg"
              onClick={handleSelectDone}
            />
          ) : (
            <S.SpanContainer>
              <S.Text>어떤 섬을 여행하고 싶은지 모를 땐?</S.Text>
              <S.TextButton onClick={onRecClick}>추천 받기</S.TextButton>
            </S.SpanContainer>
          )}
        </S.Container>
      </div>
    </>
  );
};

export default TripIslandSearchPage;
