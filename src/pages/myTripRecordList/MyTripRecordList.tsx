import BackIcon from "@/assets/icons/BackIcon";
import ToggleButton from "@/assets/icons/ToggleButton";
import Appbar from "@/components/common/header/Appbar";
import { Map } from "react-kakao-maps-sdk";
import * as S from "./styles";
import CustomMarker from "./CustomMarker";
import { useState } from "react";
import { MARKERS } from "@/data/dummy-marker";
import RecordCard from "@/components/myTripRecordList/RecordCard";

/**
 * 추억 모아보기 페이지
 * @returns
 */
export default function MyTripRecordList() {
  const [selectedMarkerId, setSelectedMarkerId] = useState(0);

  const [content, setContent] = useState<null | {
    area: string;
    startDate: string;
    endDate: string;
    text: string;
    image1: string;
    image2?: string;
    image3?: string;
  }>(null);

  const handleMarkerClick = (id: number) => {
    setSelectedMarkerId(id);

    // TO-DO :: 마커 클릭 시, 추억 내용 가져오기 API 연동
    setContent({
      area: "울릉도",
      startDate: "2024-09-01",
      endDate: "2024-09-05",
      text: "본문의 글은 최대 1줄 이상으로 넘어가지 않습니다. 1줄 이상을 넘기게 되면 말줄임표가 발생합니다.",
      image1: "/src/assets/images/mockImage1.png",
      image2: "/src/assets/images/mockImage2.png",
      image3: "/src/assets/images/mockImage2.png"
    });
  };

  return (
    <>
      <Appbar title="내 여행 추억" textAlign="center" leftIcon={<BackIcon />} rightIcon1={<ToggleButton />} />
      <S.MapContainer>
        <Map
          center={{ lat: 36.53420362353284, lng: 128.01466106167376 }}
          level={13}
          style={{ width: "100%", height: "100%" }}
        >
          {MARKERS.map((marker) => (
            <CustomMarker
              key={marker.id}
              position={marker.position}
              image={marker.image}
              isSelected={marker.id === selectedMarkerId}
              onClick={() => handleMarkerClick(marker.id)}
            />
          ))}
        </Map>
      </S.MapContainer>
      {content && (
        <S.CardArticle>
          <RecordCard
            area={content.area}
            startDate={content.startDate}
            endDate={content.endDate}
            text={content.text}
            image1={content.image1}
            image2={content.image2}
            image3={content.image3}
          />
        </S.CardArticle>
      )}
    </>
  );
}
