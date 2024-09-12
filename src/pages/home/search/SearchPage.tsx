import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Appbar from "@/components/common/header/Appbar";
import SearchBar from "@/components/common/searchBar/index";
import RecentSearch from "@/components/search/recentSearch/index";
import { useEffect, useState } from "react";
import SearchResultPage from "./SearchResultPage";

export type SearchResult = {
  id: number;
  image: string;
  name: string;
  address: string;
  rating: string;
  count: number;
  like: boolean;
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  useEffect(() => {
    // 최근 검색어 불러오기
    setKeywords(["테스트", "테스트", "테스트"]);
  }, []);

  useEffect(() => {
    if (!searchQuery) return;
    setShowResult(true);
  }, [searchResult]);

  useEffect(() => {
    if (!searchQuery) return;
    setSearchResult([
      {
        id: 1,
        image: "/src/assets/images/accommodation.png",
        name: "숙소이름",
        address: "주소",
        rating: "5.0",
        count: 1000,
        like: false
      }
    ]);
  }, [searchQuery]);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleChipClick = (index: number) => {
    setInputValue(keywords[index]);
    setSearchQuery(keywords[index]);
  };

  const handleClose = () => {
    setInputValue("");
    setSearchQuery("");
    setSearchResult([]);
    setShowResult(false);
  };

  return (
    <>
      {!showResult ? (
        <>
          <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
            <Appbar
              title="검색"
              textAlign="center"
              rightIcon1={
                <div onClick={() => navigate(-1)}>
                  <ClearIcon size="28" />
                </div>
              }
            />
            <SearchBar value={inputValue} onSearch={handleSearch} />
            <RecentSearch
              keywordList={keywords}
              onChipClick={handleChipClick}
              onChipDelete={() => {
                console.log("검색어 삭제 처리");
              }}
            />
          </div>
        </>
      ) : (
        <SearchResultPage
          searchQuery={searchQuery}
          searchResult={searchResult}
          onPrev={handleClose}
          onClose={() => navigate(-1)}
        />
      )}
    </>
  );
};

export default SearchPage;
