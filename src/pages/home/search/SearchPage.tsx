import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Appbar from "@/components/common/header/Appbar";
import SearchBar from "@/components/common/searchBar/index";
// import RecentSearch from "@/components/search/recentSearch/index";
import { Suspense, useEffect, useState } from "react";
import SearchResultPage from "./SearchResultPage";
import { useSearchPlaces } from "@/apis/place/place.queries";
import ErrorBoundary from "@/hooks/Errorboundary";

const SearchPageContent = () => {
  const navigate = useNavigate();
  // const [keywords, setKeywords] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: searchResult = [] } = useSearchPlaces({ keyword: searchQuery });

  // useEffect(() => {
  // 최근 검색어 불러오기
  // setKeywords(["테스트", "테스트", "테스트"]);
  // }, []);

  const handleSearch = (value: string) => {
    if (value.trim() === "") return;
    setSearchQuery(value);
  };

  const handleClose = () => {
    setInputValue("");
    setSearchQuery("");
  };

  return (
    <>
      {!searchQuery ? (
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
            {/* <RecentSearch
              keywordList={keywords}
              onChipClick={handleChipClick}
              onChipDelete={() => {
                console.log("검색어 삭제 처리");
              }}
            /> */}
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

const SearchPage = () => {
  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<>로딩중...</>}>
        <SearchPageContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SearchPage;
