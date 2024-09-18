import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { usePostCreateTravelRecord } from "@/apis/businessReview/businessReview.queries";
import Clear from "@/assets/icons/Clear";
import Button from "@/components/common/button";
import Appbar from "@/components/common/header/Appbar";
import OrderDisplayCircleChips from "@/components/common/orderDisplayCircleChips";
import TabAnatomy from "@/components/common/tabAnatomy";
import TextArea from "@/components/common/textArea";
import TextField from "@/components/common/textField/TextField";
import BottomCompleteButton from "@/components/myTripRecord/BottomCompleteButton";
import SpotCard from "@/components/myTripRecord/SpotCard";

const MyTripRecordPage = () => {
  const [pageOrder, setPageOrder] = useState(0);
  const [selectedTab, setSelectedTab] = useState("1");
  const navigate = useNavigate();
  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedTab(e.currentTarget.innerText);
  };
  const [isPublic, setIsPublic] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      oneLineReview: "",
      overallReview: ""
    }
  });

  const { mutate: postCreateTravelRecord } = usePostCreateTravelRecord();

  const onSubmit = (data: { oneLineReview: string; overallReview: string }) => {
    console.log("data----", data);
    console.log("isPublic----", isPublic);
    postCreateTravelRecord({
      planId: 1,
      publicPrivate: isPublic,
      images: [],
      oneLineReview: data.oneLineReview,
      overallReview: data.overallReview
    });
  };

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
              <img src="/camera.jpg" alt="trip" width="160px" height="160px" />
            </S.MainImageContainer>
            <S.GoToGalleryButtonWrapper>
              <Button
                text="갤러리로 이동"
                size="lg"
                onClick={() => {
                  // TODO: 앱 내 갤러리로 이동
                  setPageOrder(1);
                }}
              />
            </S.GoToGalleryButtonWrapper>
          </>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.DescriptionTextBox>여행이 어땠는 지 구체적으로 기록해보세요</S.DescriptionTextBox>
            <S.WritingTextContainer>
              <TextField
                label="한줄평 작성"
                placeholder="(선택) 한줄평을 작성해주세요"
                size="sm"
                control={control}
                name="oneLineReview"
              />
              <TextArea
                label="총평"
                placeholder="(선택) 여행의 총평을 적어주세요"
                maxLength={500}
                isShowLength
                control={control}
                name="overallReview"
              />
            </S.WritingTextContainer>

            <S.PhotoContainer>
              <S.Text className="label">사진</S.Text>
              <S.ImageContainer>
                <img
                  src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
                  alt="trip"
                  width="64px"
                  height="64px"
                />
                <img
                  src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
                  alt="trip"
                  width="64px"
                  height="64px"
                />
              </S.ImageContainer>
            </S.PhotoContainer>

            <TabAnatomy tabs={["1", "2", "3"]} selectedTab={selectedTab} onClick={handleTab} />

            <SpotCard />

            <BottomCompleteButton isPublic={isPublic} setIsPublic={setIsPublic} />
          </form>
        )}
      </S.MyTripRecordPageContainer>
    </>
  );
};

export default MyTripRecordPage;
