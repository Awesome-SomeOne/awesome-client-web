import { useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { useGetMyTripPlace } from "@/apis/businessReview/businessReview.queries";
import HeartIcon from "@/assets/icons/HeartIcon";
import BottomNavBar from "@/components/common/bottomNavBar";
import SearchBar from "@/components/common/searchBar";
import MapFilterChips from "@/components/map/mapFilterChips";
import MapListBottomSheet from "@/components/map/MapListBottomSheet";
import { PATH } from "@/constants/path";
import useOverlay from "@/hooks/useOverlay";

const MapPage = () => {
  const { isOpen, close } = useOverlay();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMyTripPlaceMarkerChecked, setIsMyTripPlaceMarkerChecked] = useState(false);
  const navigate = useNavigate();
  const mapRef = useRef<kakao.maps.Map>(null);
  const defaultLevel = 13;

  const { data: myTripPlaceData, error } = useGetMyTripPlace();
  console.log(myTripPlaceData);
  console.log(error);

  const [level, setLevel] = useState(defaultLevel);

  const handleSubmit = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleInputClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(PATH.SEARCH);
  };

  const handleMyTripPlaceMarkerToggle = () => {
    if (!isMyTripPlaceMarkerChecked) {
      mapRef.current?.setLevel(13);
    }
    setIsMyTripPlaceMarkerChecked(!isMyTripPlaceMarkerChecked);
  };

  return (
    <S.MapPageWrapper>
      {/* <button onClick={() => toggle()}>sdfsdf</button> */}
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "100%" }}
        level={defaultLevel} // 지도의 확대 레벨
        zoomable={true}
        ref={mapRef}
      >
        <S.UpperBarContainer>
          <SearchBar
            value={searchQuery}
            onValueChange={handleInputChange}
            onSearch={handleSubmit}
            onClick={handleInputClick}
          />
          {/* <MapFilterChips /> */}
        </S.UpperBarContainer>

        {isMyTripPlaceMarkerChecked &&
          myTripPlaceData?.map((data) => (
            <MapMarker
              key={data.businessId}
              position={{ lat: Number(data.mapY), lng: Number(data.mapX) }}
              image={{
                src: "/icons/mapMarker/mapMarkerHeart.svg",
                size: { width: 30, height: 30 }
              }}
            />
          ))}
        <S.MyTripPlaceMarkerToggleButton
          onClick={handleMyTripPlaceMarkerToggle}
          isMyTripPlaceMarkerChecked={isMyTripPlaceMarkerChecked}
        >
          <HeartIcon checked={isMyTripPlaceMarkerChecked} />내 여행 장소 확인하기
        </S.MyTripPlaceMarkerToggleButton>
      </Map>
      <MapListBottomSheet close={close} isOpen={isOpen} />
      <BottomNavBar />
    </S.MapPageWrapper>
  );
};

export default MapPage;
