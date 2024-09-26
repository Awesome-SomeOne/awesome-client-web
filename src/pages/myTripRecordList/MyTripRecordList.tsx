import { useGetMyTripRecordList } from "@/apis/myTripRecordList/myTripRecordList.quaries";
import BackIcon from "@/assets/icons/BackIcon";
import ToggleButton from "@/assets/icons/ToggleButton";
import Appbar from "@/components/common/header/Appbar";
import RecordCard from "@/components/myTripRecordList/RecordCard";
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

  const { data: items } = useGetMyTripRecordList();

  const [content, setContent] = useState<null | {
    review: string;
    detailReview: string;
    image1: string;
    image2?: string;
    image3?: string;
  }>(null);

  const handleMarkerClick = (item: any) => {
    setSelectedMarkerId(item.recordId);

    setContent({
      review: item.oneLineReview,
      detailReview: item.overallReview,
      image1: item.businessReviews[0].imageUrls[0],
      image2: item.businessReviews[0].imageUrls[1],
      image3: item.businessReviews[0].imageUrls[2]
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
        rightIcon1={<ToggleButton />}
      />
      <S.MapContainer>
        <Map
          center={{ lat: 36.53420362353284, lng: 128.01466106167376 }}
          level={13}
          style={{ width: "100%", height: "100%" }}
        >
          {items &&
            items.map((item: any) => (
              <CustomMarker
                key={item.recordId}
                position={{ lat: item.businessReviews[0].yaddress, lng: item.businessReviews[0].xaddress }}
                image={{
                  src: "/images/ImageMarker/DefaultImageMarker.svg",
                  size: {
                    width: 24,
                    height: 32
                  }
                }}
                isSelected={item.recordId === selectedMarkerId}
                onClick={() => handleMarkerClick(item)}
              />
            ))}
        </Map>
      </S.MapContainer>
      {content && (
        <S.CardArticle>
          <RecordCard
            review={content.review}
            detailReview={content.detailReview}
            image1={content.image1}
            image2={content.image2}
            image3={content.image3}
          />
        </S.CardArticle>
      )}
    </>
  );
}
