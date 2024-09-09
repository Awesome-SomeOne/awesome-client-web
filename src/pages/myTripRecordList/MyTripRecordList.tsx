import BackIcon from "@/assets/icons/BackIcon";
import ToggleButton from "@/assets/icons/ToggleButton";
import Appbar from "@/components/common/header/Appbar";
import { Map } from "react-kakao-maps-sdk";
import { MapContainer } from "./styles";

/**
 * 추억 모아보기 페이지
 * @returns
 */
export default function MyTripRecordList() {
  return (
    <>
      <Appbar title="내 여행 추억" textAlign="center" leftIcon={<BackIcon />} rightIcon1={<ToggleButton />} />
      <MapContainer>
        <Map
          center={{ lat: 36.051268273816575, lng: 127.49882556860628 }}
          level={13}
          style={{ width: "100%", height: "100%" }}
        ></Map>
      </MapContainer>
    </>
  );
}
