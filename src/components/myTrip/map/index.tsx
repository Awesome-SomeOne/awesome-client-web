import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { Theme } from "@/styles/theme";

export const MapComponent = ({ positionList }: { positionList: { lat: number; lng: number }[] }) => {
  const imageSize = { width: 16, height: 16 };

  const averageLat = positionList.reduce((sum, position) => sum + position.lat, 0) / positionList.length;
  const averageLng = positionList.reduce((sum, position) => sum + position.lng, 0) / positionList.length;
  const mapCenter = { lat: averageLat - 0.001, lng: averageLng };

  return (
    <Map center={mapCenter} style={{ width: "100%", height: "100%" }} level={3}>
      {positionList.map((position, index) => (
        <MapMarker
          key={index}
          position={{ lat: position.lat, lng: position.lng }}
          image={{
            src: `/icons/mapMarker/mapMarker${index + 1}.svg`,
            size: imageSize
          }}
        />
      ))}

      {positionList.map((_, index) => {
        if (index < positionList.length - 1) {
          return (
            <Polyline
              key={index}
              path={[
                { lat: positionList[index].lat, lng: positionList[index].lng },
                { lat: positionList[index + 1].lat, lng: positionList[index + 1].lng }
              ]}
              strokeColor={Theme.colors.Label_Default}
              strokeStyle={"shortdash"}
            />
          );
        }
        return null;
      })}
    </Map>
  );
};

export default MapComponent;
