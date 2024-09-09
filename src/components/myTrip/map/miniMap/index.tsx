import { Map, MapMarker } from "react-kakao-maps-sdk";

const MiniMapComponent = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <Map center={{ lat, lng }} style={{ width: "100%", height: "160px" }} level={3}>
      <MapMarker
        position={{ lat, lng }}
        image={{
          src: "/src/assets/images/mapMarker.svg",
          size: { width: 72, height: 73 }
        }}
      />
    </Map>
  );
};

export default MiniMapComponent;
