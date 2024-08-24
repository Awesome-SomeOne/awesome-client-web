import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy";
import TextArea from "@/components/common/textArea";
import TextField from "@/components/common/textField/TextField";
import BottomCompleteButton from "@/components/myTripRecord/BottomCompleteButton";
import SpotCard from "@/components/myTripRecord/SpotCard";

const MyTripRecordPage = () => {
  const [selectedTab, setSelectedTab] = useState("1");
  const navigate = useNavigate();
  const handleTab = (e: any) => {
    setSelectedTab(e.target.innerText);
  };

  return (
    <>
      <Appbar
        title="추억 기록하기"
        textAlign="center"
        leftIcon={
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <BackIcon />{" "}
          </button>
        }
      />
      <S.MyTripRecordPageContainer>
        <S.DescriptionTextBox>여행이 어땠는 지 구체적으로 기록해보세요</S.DescriptionTextBox>
        <S.WritingTextContainer>
          <TextField label="한줄평 작성" placeholder="(선택) 한줄평을 작성해주세요" size="sm" />
          <TextArea label="총평" placeholder="(선택) 여행의 총평을 적어주세요" maxLength={500} isShowLength />
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
            <img
              src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
              alt="trip"
              width="64px"
              height="64px"
            />{" "}
            <img
              src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
              alt="trip"
              width="64px"
              height="64px"
            />{" "}
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

        <BottomCompleteButton />
      </S.MyTripRecordPageContainer>
    </>
  );
};

export default MyTripRecordPage;
