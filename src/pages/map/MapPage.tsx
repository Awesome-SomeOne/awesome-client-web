import { Map, MapMarker } from "react-kakao-maps-sdk";

import MapFilterChips from "@/components/map/mapFilterChips";
import MapListBottomSheet from "@/components/map/MapListBottomSheet";
import useOverlay from "@/hooks/useOverlay";

import * as S from "./styles";

const MapPage = () => {
  const { isOpen, close } = useOverlay();

  return (
    <S.MapPageWrapper>
      {/* <button onClick={() => toggle()}>sdfsdf</button> */}
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "100%" }}>
        <MapFilterChips />
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
      <MapListBottomSheet close={close} isOpen={isOpen} />
    </S.MapPageWrapper>
  );
};

export default MapPage;
