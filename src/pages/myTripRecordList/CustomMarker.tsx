import { useEffect, useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

type markerProps = {
  position: { lat: number; lng: number };
  image: {
    src: string;
    size: {
      width: number;
      height: number;
    };
  };
  isSelected: boolean;
  onClick: () => void;
};

export default function CustomMarker({ position, image, isSelected, onClick }: markerProps) {
  const [marker, setMarker] = useState(image);

  useEffect(() => {
    if (isSelected) {
      setMarker({
        src: "/icons/mapMarker/selectedMarker.svg",
        size: { width: 36, height: 50 }
      });
    } else {
      setMarker(image);
    }
  }, [isSelected, image]);

  return <MapMarker position={position} image={marker} onClick={onClick} />;
}
