import Clear from "@/assets/icons/Clear";
import MoreIcon from "@/assets/icons/MoreIcon";
import Appbar from "@/components/common/header/Appbar";
import * as S from "./styles";
import TabAnatomy from "@/components/common/tabAnatomy";
import DetailTravelMemories from "@/components/myTripRecord/DetailTravelMemories";
import DetailSchedule from "@/components/myTripRecord/DetailSchedule";
import { useState } from "react";
import BottomSheet from "@/components/common/bottomSheet";
import useOverlay from "@/hooks/useOverlay";
import { useNavigate } from "react-router-dom";

const MyTripRecordDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("여행 추억");
  const { isOpen, close, toggle } = useOverlay();
  const navigate = useNavigate();

  const handleTab = (e: any) => {
    setSelectedTab(e.target.innerText);
  };

  return (
    <>
      <Appbar
        title=""
        textAlign="center"
        rightIcon1={
          <button
            onClick={() => {
              toggle();
            }}
          >
            <MoreIcon />
          </button>
        }
        rightIcon2={
          <button>
            <Clear />
          </button>
        }
      />

      <S.MyTripRecordDetailPageContainer>
        <S.SpotAndDateContainer>
          <S.Text className="spot">울릉도</S.Text>
          <S.Text className="date">2024.06.28 ~ 2024.06.30</S.Text>
        </S.SpotAndDateContainer>

        <TabAnatomy tabs={["여행 추억", "일정"]} selectedTab={selectedTab} onClick={handleTab} />

        {selectedTab === "여행 추억" ? <DetailTravelMemories /> : <DetailSchedule />}
      </S.MyTripRecordDetailPageContainer>

      <BottomSheet isOpen={isOpen} close={close} style={{ paddingTop: "16px" }}>
        <S.MenuButton
          onClick={() => {
            navigate("/my-trip-record/1");
          }}
        >
          수정하기
        </S.MenuButton>
        <S.MenuButton>삭제하기</S.MenuButton>
      </BottomSheet>
    </>
  );
};

export default MyTripRecordDetailPage;
