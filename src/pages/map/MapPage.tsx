import { Map, MapMarker } from "react-kakao-maps-sdk";

import * as S from "./styles";
import MapFilterChips from "@/components/map/mapFilterChips";


const MapPage = () => {
  return (
    <S.MapPageWrapper>
      <Map center={{ lat: 33.5563, lng: 126.79581 }} style={{ width: "100%", height: "100%" }}>
        <MapFilterChips />
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: "#000" }}>Hello World!</div>
        </MapMarker>
      </Map>
    </S.MapPageWrapper>
  );
};

export default MapPage;
