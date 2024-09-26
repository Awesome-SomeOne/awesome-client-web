import ClearIcon from "@/assets/icons/ClearIcon";
import GeneralHeader from "@/components/common/generalHeader/index";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/place/PlaceComponent/index";
import { NoResult } from "@/components/search/noResult/index";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { useState } from "react";
import * as S from "./styles";

const SearchResultPage = ({
  searchQuery,
  searchResult,
  onPrev,
  onClose
}: {
  searchQuery: string;
  searchResult: {
    businessId: number;
    businessType: string;
    businessName: string;
    address: string;
    imageUrl: string;
  }[];
  onPrev: () => void;
  onClose: () => void;
}) => {
  const [currentTab, setCurrentTab] = useState(CATEGORY_LIST[0]);

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

  return (
    <>
      <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column" }}>
        <Appbar
          title="검색결과"
          textAlign="center"
          rightIcon1={
            <div onClick={onPrev}>
              <img src="/icons/search.svg" />
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
          {searchResult.length ? (
            <S.ComponentCol>
              {searchResult
                .filter((result) => result.businessType === currentTab)
                .map((result, index) => (
                  <PlaceComponent
                    key={index}
                    image={result.imageUrl}
                    name={result.businessName}
                    address={result.address}
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
