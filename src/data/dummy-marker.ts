import Marker from "@/models/marker";

const defaultMarker = "/src/assets/images/ImageMarker/DefaultImageMarker.svg";
const defaultMarkerSize = {
  width: 24,
  height: 32
};

export const MARKERS = [
  new Marker(
    1,
    {
      src: defaultMarker,
      size: defaultMarkerSize
    },
    {
      lat: 37.26460804989656,
      lng: 126.45973416437135
    }
  ),
  new Marker(
    2,
    {
      src: defaultMarker,
      size: defaultMarkerSize
    },
    {
      lat: 37.50349047592858,
      lng: 126.5306689044369
    }
  ),
  new Marker(
    3,
    {
      src: defaultMarker,
      size: defaultMarkerSize
    },
    {
      lat: 35.1139343492153,
      lng: 129.11263757083472
    }
  )
];
