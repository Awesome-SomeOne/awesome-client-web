import ClearIcon from "@/assets/icons/ClearIcon";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import Chip from "@/components/common/chip/index";
import Dropdown from "@/components/common/dropdown/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/home/PlaceComponent/index";
import { NoResult } from "@/components/search/noResult/index";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { useState } from "react";
import { SearchResult } from "./SearchPage";
import * as S from "./styles";

const SearchResultPage = ({
  searchQuery,
  searchResult,
  onPrev,
  onClose
}: {
  searchQuery: string;
  searchResult: SearchResult[];
  onPrev: () => void;
  onClose: () => void;
}) => {
  const [currentTab, setCurrentTab] = useState("숙소");

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
    // tab 변경 처리하기
  };

  return (
    <>
      <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column" }}>
        <Appbar
          title="검색결과"
          textAlign="center"
          rightIcon1={
            <div onClick={onPrev}>
              <img src="/src/assets/icons/search.svg" />
            </div>
          }
          rightIcon2={
            <div onClick={onClose}>
              <ClearIcon size="28" />
            </div>
          }
        />
        <GeneralHeader title={searchQuery} />
        <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleClick} />
        <div style={{ height: "100%", overflow: "scroll", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "8px 20px" }}>
            <Dropdown text={"최신순"} />
            <Chip text={"섬 전체"} shape="box" trailingIcon={<DropdownIcon />} />
          </div>
          {searchResult.length ? (
            <S.ComponentCol>
              {searchResult.map((result: SearchResult) => (
                <PlaceComponent
                  image={result.image}
                  name={result.name}
                  rating={result.rating}
                  count={result.count}
                  address={result.address}
                  like={result.like}
                />
              ))}
            </S.ComponentCol>
          ) : (
            <NoResult />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResultPage;
