import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import {
  useGetTravelRecordByPlanId,
  usePostCreateTravelRecord,
  usePostUpdateTravelRecord
} from "@/apis/businessReview/businessReview.queries";
import Clear from "@/assets/icons/Clear";
import Button from "@/components/common/button";
import Appbar from "@/components/common/header/Appbar";
import OrderDisplayCircleChips from "@/components/common/orderDisplayCircleChips";
import TabAnatomy from "@/components/common/tabAnatomy";
import TextArea from "@/components/common/textArea";
import TextField from "@/components/common/textField/TextField";
import BottomCompleteButton from "@/components/myTripRecord/BottomCompleteButton";
import SpotCard from "@/components/myTripRecord/SpotCard";

import * as S from "./styles";

const MyTripRecordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { tripId } = useParams<{ tripId: string }>();
  const planId = parseInt(tripId!);
  const recordId = Number(searchParams.get("recordId"));

  const [pageOrder, setPageOrder] = useState(recordId ? 1 : 0);
  const [selectedTab, setSelectedTab] = useState("1");

  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };
  const [isPublic, setIsPublic] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const { mutate: postCreateTravelRecord } = usePostCreateTravelRecord(planId);
  const { mutate: postUpdateTravelRecord } = usePostUpdateTravelRecord(planId, recordId);
  const { data: travelRecordByPlanId } = useGetTravelRecordByPlanId(planId);
  console.log("travelRecordByPlanId", travelRecordByPlanId);

  const methods = useForm({
    defaultValues: {
      oneLineReview: travelRecordByPlanId?.oneLineReview ?? "",
      overallReview: travelRecordByPlanId?.overallReview ?? ""
    }
  });

  const onSubmit = async (data: { oneLineReview: string; overallReview: string }) => {
    const formData = new FormData();
    if (selectedImages.length > 0) {
      for (let i = 0; i < selectedImages.length; i++) {
        try {
          const [mimeType, base64Data] = selectedImages[i].split(",");
          const type = mimeType.match(/:(.*?);/)?.[1] || "image/jpeg";

          const byteCharacters = atob(base64Data);
          const byteNumbers = new Array(byteCharacters.length);
          for (let j = 0; j < byteCharacters.length; j++) {
            byteNumbers[j] = byteCharacters.charCodeAt(j);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type });

          const fileName = `image_${Date.now()}_${i}.${type.split("/")[1]}`;
          const file = new File([blob], fileName, { type });

          formData.append("images", file);
        } catch (error) {
          console.error("Error processing image:", error);
        }
      }
    } else {
      console.log("travelRecordByPlanId?.imageUrls", travelRecordByPlanId?.imageUrls);
      if (travelRecordByPlanId?.imageUrls) {
        for (let i = 0; i < travelRecordByPlanId.imageUrls.length; i++) {
          try {
            const response = await fetch(travelRecordByPlanId.imageUrls[i]);
            const blob = await response.blob();
            const fileName = `image_${Date.now()}_${i}.jpg`;
            const file = new File([blob], fileName, { type: "image/jpeg" });
            console.log("file---------------", file);
            formData.append("images", file);
          } catch (error) {
            console.error("이미지 처리 중 오류 발생:", error);
          }
        }
      }
    }
    formData.append("planId", planId.toString());
    // formData.append("publicPrivate", isPublic.toString());
    formData.append("publicPrivate", "false");
    formData.append("oneLineReview", data.oneLineReview);
    formData.append("overallReview", data.overallReview);
    if (recordId) {
      formData.append("recordId", recordId.toString());
    }

    recordId ? postUpdateTravelRecord(formData) : postCreateTravelRecord(formData);
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "selectedImages") {
          setSelectedImages(data.data.images);
          setPageOrder(1);
        }
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    // 모든 가능한 이벤트 리스너 추가
    window.addEventListener("message", handleMessage);
    document.addEventListener("message", handleMessage as EventListener);
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.onMessage = handleMessage;
    }

    return () => {
      window.removeEventListener("message", handleMessage);
      document.removeEventListener("message", handleMessage as EventListener);
    };
  }, []);

  return (
    <>
      <Appbar
        title="추억 기록하기"
        textAlign="center"
        rightIcon1={
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <Clear />
          </button>
        }
      />
      <S.MyTripRecordPageContainer>
        <OrderDisplayCircleChips totalNumber={2} currentNumber={pageOrder + 1} style={{ padding: "0 20px" }} />

        {pageOrder === 0 ? (
          <>
            <S.DescriptionTextBox>
              <span>추억으로 정리할 여행 사진을 골라주세요</span>
              <S.Text className="subtitle">최대 5개까지 등록할 수 있어요</S.Text>
            </S.DescriptionTextBox>
            <S.MainImageContainer>
              <img src="/images/camera.jpg" alt="trip" width="160px" height="160px" />
            </S.MainImageContainer>
            <S.GoToGalleryButtonWrapper>
              <Button
                text="갤러리로 이동"
                size="lg"
                onClick={() => {
                  // NOTE: 앱 내 갤러리로 열기
                  window.ReactNativeWebView.postMessage(JSON.stringify({ type: "openGallery" }));
                }}
              />
            </S.GoToGalleryButtonWrapper>
          </>
        ) : (
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <S.DescriptionTextBox>여행이 어땠는 지 구체적으로 기록해보세요</S.DescriptionTextBox>
              <S.WritingTextContainer>
                <TextField
                  label="한줄평 작성"
                  placeholder="(선택) 한줄평을 작성해주세요"
                  size="sm"
                  control={methods.control}
                  name="oneLineReview"
                />
                <TextArea
                  label="총평"
                  placeholder="(선택) 여행의 총평을 적어주세요"
                  maxLength={500}
                  isShowLength
                  control={methods.control}
                  name="overallReview"
                />
              </S.WritingTextContainer>

              <S.PhotoContainer>
                <S.Text className="label">사진</S.Text>
                <S.ImageContainer>
                  {travelRecordByPlanId?.imageUrls &&
                    travelRecordByPlanId?.imageUrls.map((data, index) => (
                      <img
                        key={index}
                        src={data}
                        alt={`Selected image ${index + 1}`}
                        style={{ width: 64, height: 64, margin: 5 }}
                      />
                    ))}
                  {selectedImages &&
                    selectedImages.map((data, index) => (
                      <img
                        key={index}
                        src={data}
                        alt={`Selected image ${index + 1}`}
                        style={{ width: 64, height: 64, margin: 5 }}
                      />
                    ))}
                </S.ImageContainer>
              </S.PhotoContainer>

              {/* <TabAnatomy tabs={["1", "2", "3"]} selectedTab={selectedTab} onClick={handleTab} /> */}

              {/* <SpotCard /> */}

              <BottomCompleteButton isPublic={isPublic} setIsPublic={setIsPublic} />
            </form>
          </FormProvider>
        )}
      </S.MyTripRecordPageContainer>
    </>
  );
};

export default MyTripRecordPage;
