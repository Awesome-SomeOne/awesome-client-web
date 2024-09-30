import { Map, MapMarker, Polyline, useMap } from "react-kakao-maps-sdk";
import { useEffect, useMemo } from "react";
import { Theme } from "@/styles/theme";

export const MapComponent = ({ positionList }: { positionList: { lat: number; lng: number }[] }) => {
  const imageSize = { width: 16, height: 16 };
  const mapCenter = { lat: positionList[0].lat, lng: positionList[0].lng };

  return (
    <Map center={mapCenter} style={{ width: "100%", height: "70%" }} level={3}>
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
      <SetMapBounds positionList={positionList} />
    </Map>
  );
};

const SetMapBounds = ({ positionList }: { positionList: { lat: number; lng: number }[] }) => {
  const map = useMap();

  const bounds = useMemo(() => {
    const bounds = new kakao.maps.LatLngBounds();
    positionList.forEach((position) => {
      bounds.extend(new kakao.maps.LatLng(position.lat, position.lng));
    });
    return bounds;
  }, [positionList]);

  useEffect(() => {
    if (map && bounds) {
      map.setBounds(bounds);
    }
  }, [map, bounds]);

  return null;
};

export default MapComponent;
