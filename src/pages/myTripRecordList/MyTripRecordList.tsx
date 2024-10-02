import { useGetMyTripRecordList } from "@/apis/myTripRecordList/myTripRecordList.quaries";
import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import RecordCard from "@/components/myTripRecordList/RecordCard";
import { PATH } from "@/constants/path";
import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import CustomMarker from "./CustomMarker";
import * as S from "./styles";

/**
 * 추억 모아보기 페이지
 * @returns
 */
export default function MyTripRecordList() {
  const navigate = useNavigate();
  const [selectedMarkerId, setSelectedMarkerId] = useState(0);

  // 추억 item
  const { data: records } = useGetMyTripRecordList();

  const [content, setContent] = useState<null | {
    planId: number;
    recordId: number;
    islandName: string;
    detailReview: string;
    startDate: string;
    endDate: string;
    image1: string;
    image2?: string;
    image3?: string;
  }>(null);

  const handleMarkerClick = (item: any) => {
    setSelectedMarkerId(item.recordId);

    setContent({
      planId: item.planId,
      recordId: item.recordId,
      islandName: item.islandName,
      detailReview: item.recordContent,
      startDate: item.startDate,
      endDate: item.endDate,
      image1: item.imageUrls[0],
      image2: item.imageUrls[1],
      image3: item.imageUrls[2]
    });
  };

  return (
    <>
      <Appbar
        title="내 여행 추억"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
        // rightIcon1={<ToggleButton />}
      />
      <S.MapContainer>
        <Map
          center={{ lat: 36.53420362353284, lng: 128.01466106167376 }}
          level={13}
          style={{ width: "100%", height: "100%" }}
        >
          {records &&
            records.map((record: any) => {
              return (
                <CustomMarker
                  key={record.recordId}
                  position={{ lat: record.latitude, lng: record.longitude }}
                  image={{
                    src: "/icons/mapMarker/defaultMarker.svg",
                    size: {
                      width: 24,
                      height: 32
                    }
                  }}
                  isSelected={record.recordId === selectedMarkerId}
                  onClick={() => handleMarkerClick(record)}
                />
              );
            })}
        </Map>
      </S.MapContainer>
      {content && (
        <S.CardArticle onClick={() => navigate(PATH.MY_TRIP_RECORD_DETAIL(content.planId, content.recordId))}>
          <RecordCard
            islandName={content.islandName}
            detailReview={content.detailReview}
            startDate={content.startDate}
            endDate={content.endDate}
            image1={content.image1}
            image2={content.image2}
            image3={content.image3}
          />
        </S.CardArticle>
      )}
    </>
  );
}
