import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReportPage from "../home/detail/report/ReportPage";
import { useGetMyTripRecordDetail } from "@/apis/businessReview/businessReview.queries";
import Clear from "@/assets/icons/Clear";
import ClearIcon from "@/assets/icons/ClearIcon";
import MoreIcon from "@/assets/icons/MoreIcon";
import BottomSheet from "@/components/common/bottomSheet";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy";
import DetailSchedule from "@/components/myTripRecord/DetailSchedule";
import DetailTravelMemories from "@/components/myTripRecord/DetailTravelMemories";
import useOverlay from "@/hooks/useOverlay";

import * as S from "./styles";

const MyTripRecordDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("여행 추억");
  const { isOpen, close, toggle } = useOverlay();
  const navigate = useNavigate();
  const [showReportPage, setShowReportPage] = useState(false);

  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedTab((e.target as HTMLElement).innerText);
  };

  const { data, isLoading } = useGetMyTripRecordDetail(67);

  if (!data || isLoading) {
    return <div>로딩중...</div>;
  }

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
          <button
            onClick={() => {
              navigate("/");
            }}
          >
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

        {selectedTab === "여행 추억" ? (
          <DetailTravelMemories
            oneLineReview={data.oneLineReview}
            overallReview={data.overallReview}
            imageUrl={data.imageUrl}
          />
        ) : (
          <DetailSchedule businessReviews={data.businessReviews} />
        )}
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
        <S.MenuButton
          onClick={() => {
            setShowReportPage(true);
            close();
          }}
        >
          신고하기
        </S.MenuButton>
      </BottomSheet>
      {showReportPage && (
        <div style={{ height: "100%", position: "absolute", top: 0, width: "100%", backgroundColor: "white" }}>
          <Appbar
            title="신고하기"
            textAlign="center"
            rightIcon1={
              <div onClick={() => setShowReportPage(false)}>
                <ClearIcon size="28" />
              </div>
            }
          />
          <ReportPage onClose={() => setShowReportPage(false)} />
        </div>
      )}
    </>
  );
};

export default MyTripRecordDetailPage;
