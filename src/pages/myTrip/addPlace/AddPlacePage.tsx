import { useState, useEffect } from "react";
import ClearIcon from "@/assets/icons/ClearIcon";
import Button from "@/components/common/button/index";
import Chip from "@/components/common/chip/index";
import Divider from "@/components/common/divider/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import SearchBar from "@/components/common/searchBar/index";
import ListComponent from "@/components/myTrip/listComponent/index";
import * as S from "./styles";
import Appbar from "@/components/common/header/Appbar";
import RecentSearch from "@/components/search/recentSearch/index";
import { PlaceType } from "../editPlan/EditPlanPage";
import { NoResult } from "@/components/search/noResult/index";

const recommendedPlaces: PlaceType[] = [
  {
    id: 0,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 1,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 2,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 3,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 4,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 5,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 6,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 7,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  },
  {
    id: 8,
    name: "산선암",
    type: "관광명소",
    address: "경상북도 울릉도"
  }
];

const AddPlacePage = ({ onPrev, day }: { onPrev: () => void; day: number }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlaces, setSelectedPlaces] = useState<PlaceType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedPlaces, setSearchedPlaces] = useState<PlaceType[]>([]);
  const [showSelectedList, setShowSelectedList] = useState(false);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    // 최근 검색어 불러오기
    setKeywords(["테스트", "테스트", "테스트"]);
  }, []);

  const handleAddClick = () => {
    // Day에 선택한 장소 추가 처리하기
    onPrev();
  };

  useEffect(() => {
    // 검색 처리하기
    setSearchedPlaces([
      {
        id: 100,
        name: searchQuery,
        type: "관광명소",
        address: "경상북도 울릉도"
      }
    ]);
    return () => setSearchedPlaces([]);
  }, [searchQuery]);

  useEffect(() => {
    if (inputValue !== searchQuery) setSearchQuery("");
  }, [inputValue]);

  useEffect(() => {
    if (selectedPlaces.length > 0) {
      if (isSearching) {
        if (searchedPlaces.length > 0) setShowSelectedList(true);
        else setShowSelectedList(false);
      } else {
        setShowSelectedList(true);
      }
    } else {
      setShowSelectedList(false);
    }
  }, [isSearching, selectedPlaces, searchedPlaces]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleChipClick = (index: number) => {
    setInputValue(keywords[index]);
    setSearchQuery(keywords[index]);
  };

  useEffect(() => {
    if (isSearching) return;
    // setSearchedPlaces([]);
    setInputValue("");
    setSearchQuery("");
  }, [isSearching]);

  return (
    <div
      style={{
        paddingTop: "56px",
        height: "100%",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <Appbar
        title={`Day ${day}`}
        textAlign="center"
        rightIcon1={
          <div onClick={onPrev}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchBar
          autoFocus={false}
          placeholder="숙소,식당,관광명소 등을 검색해주세요"
          value={inputValue}
          onValueChange={setInputValue}
          onSearch={handleSearch}
          onFocus={() => setIsSearching(true)}
          showBackIcon={isSearching || Boolean(inputValue)}
          BackIconOnClick={() => setIsSearching(false)}
          style={{ flex: "1" }}
        />
      </div>
      <Divider size="sm" />
      {!isSearching && (
        <>
          <GeneralHeader title="[포토스팟]에 추천하는 장소" />
          <S.ListContainer isSelected={selectedPlaces.length > 0}>
            {recommendedPlaces.map((place) => (
              <ListComponent
                key={place.id}
                place={place}
                onClick={() => {
                  if (selectedPlaces.some((p) => p.id === place.id)) {
                    setSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
                  } else {
                    setSelectedPlaces([...selectedPlaces, place]);
                  }
                }}
                checkbox
                selected={!!selectedPlaces.some((p) => p.id === place.id)}
              />
            ))}
          </S.ListContainer>
        </>
      )}
      {showSelectedList && (
        <S.BottomContainer>
          <GeneralHeader title="선택 목록" sub={`총 ${selectedPlaces.length}개`} />
          <S.ChipRow>
            {selectedPlaces.map((place) => (
              <Chip
                key={place.id}
                text={place.name}
                selected
                trailingIcon={<ClearIcon />}
                onChipClick={() => {
                  setSelectedPlaces(selectedPlaces.filter((p) => p !== place));
                }}
              />
            ))}
          </S.ChipRow>
          <Button
            text="추가하기"
            style={{ width: "calc(100% - 40px)", margin: "8px 20px" }}
            size="lg"
            onClick={handleAddClick}
          />
        </S.BottomContainer>
      )}
      {searchQuery && (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", overflow: "scroll" }}>
          {searchedPlaces.length > 0 ? (
            searchedPlaces.map((place) => (
              <ListComponent
                key={place.id}
                place={place}
                onClick={() => {
                  if (selectedPlaces.some((p) => p.id === place.id)) {
                    setSelectedPlaces(selectedPlaces.filter((p) => p.id !== place.id));
                  } else {
                    setSelectedPlaces([...selectedPlaces, place]);
                  }
                }}
                checkbox
                selected={!!selectedPlaces.some((p) => p.id === place.id)}
              />
            ))
          ) : (
            <NoResult />
          )}
        </div>
      )}
      {isSearching && !inputValue && (
        <RecentSearch
          keywordList={keywords}
          onChipClick={handleChipClick}
          onChipDelete={() => {
            console.log("검색어 삭제 처리");
          }}
        />
      )}
    </div>
  );
};

export default AddPlacePage;
