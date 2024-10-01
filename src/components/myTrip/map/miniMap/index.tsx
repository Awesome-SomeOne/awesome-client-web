import { Map, MapMarker } from "react-kakao-maps-sdk";

const MiniMapComponent = ({ position }: { position: { lat: number; lng: number } }) => {
  return (
    <Map center={position} style={{ width: "100%", height: "160px" }} level={3}>
      <MapMarker
        position={position}
        image={{
          src: "/icons/mapMarker/mapMarker.svg",
          size: { width: 72, height: 73 }
        }}
      />
    </Map>
  );
};

export default MiniMapComponent;
