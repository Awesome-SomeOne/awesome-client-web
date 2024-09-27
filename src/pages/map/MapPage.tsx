import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import BottomNavBar from "@/components/common/bottomNavBar";
import SearchBar from "@/components/common/searchBar";
import MapFilterChips from "@/components/map/mapFilterChips";
import MapListBottomSheet from "@/components/map/MapListBottomSheet";
import { PATH } from "@/constants/path";
import useOverlay from "@/hooks/useOverlay";

const MapPage = () => {
  const { isOpen, close } = useOverlay();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputClick = () => {
    navigate(PATH.SEARCH);
  };

  return (
    <S.MapPageWrapper>
      {/* <button onClick={() => toggle()}>sdfsdf</button> */}
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "100%" }}>
        <S.UpperBarContainer>
          <SearchBar
            value={searchQuery}
            onValueChange={handleInputChange}
            onSearch={handleSubmit}
            onClick={handleInputClick}
          />
          <MapFilterChips />
        </S.UpperBarContainer>
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <MapListBottomSheet close={close} isOpen={isOpen} />
      <BottomNavBar />
    </S.MapPageWrapper>
  );
};

export default MapPage;
