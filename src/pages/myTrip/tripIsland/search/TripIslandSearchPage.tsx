import { useEffect, useState } from "react";
import ClearIcon from "@/assets/icons/ClearIcon";
import Button from "@/components/common/button/index";
import Divider from "@/components/common/divider/index";
import Appbar from "@/components/common/header/Appbar";
import SearchBar from "@/components/common/searchBar/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import { Place } from "@/types/myTrip";
import { NoResult } from "@/components/search/noResult/index";
import * as S from "./styles";

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
  const [searchResult, setSearchResult] = useState<Place[]>([]);
  const [selectedIsland, setSelectedIsland] = useState<Place | null>(null);

  useEffect(() => {
    console.log(searchQuery);
    if (!searchQuery) {
      setSearchResult([]);
      return;
    }
    // 검색 처리하기
    const result = [
      { id: 1, name: "남이섬", type: "관광명소", address: "경상북도 울릉도" },
      { id: 2, name: "제주도", type: "관광명소", address: "경상북도 울릉도" }
    ];
    setSearchResult(result);
  }, [searchQuery]);

  const handleSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputChange = (value: string) => {
    setSelectedIsland(null);
    setSearchQuery(value);
  };

  const handleSelectDone = () => {
    // selectedIsland 선택 처리
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
              searchResult.map((place, index) => (
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
