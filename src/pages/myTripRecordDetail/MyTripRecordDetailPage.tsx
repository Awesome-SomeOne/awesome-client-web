import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetMyTripRecordDetail } from "@/apis/businessReview/businessReview.queries";
import { useGetPlan } from "@/apis/myTrip/myTrip.queries";
import Clear from "@/assets/icons/Clear";
import ClearIcon from "@/assets/icons/ClearIcon";
import MoreIcon from "@/assets/icons/MoreIcon";
import BottomSheet from "@/components/common/bottomSheet";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy";
import DetailSchedule from "@/components/myTripRecord/DetailSchedule";
import DetailTravelMemories from "@/components/myTripRecord/DetailTravelMemories";
import useOverlay from "@/hooks/useOverlay";

import ReportPage from "../placeDetail/report/ReportPage";
import * as S from "./styles";

// import ReportPage from "../home/detail/report/ReportPage";

const MyTripRecordDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("여행 추억");
  const { isOpen, close, toggle } = useOverlay();
  const navigate = useNavigate();
  const [showReportPage, setShowReportPage] = useState(false);
  // const { data: planData } = useGetPlan({ planId: 1 });
  // const { startDate, endDate, islandName, travelPlaceList, planName } = planData || {};
  // console.log(planData);

  const handleTab = (e: React.MouseEvent<HTMLElement>) => {
    setSelectedTab((e.target as HTMLElement).innerText);
  };

  const recordId = Number(useParams().recordId);
  const { data, isLoading } = useGetMyTripRecordDetail(recordId!);
  const queryClient = useQueryClient();
  console.log(data);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["myTripRecordDetail"] });
  }, []);

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
          <S.Text className="spot">{data.islandName}</S.Text>
          <S.Text className="date">
            {dayjs(data.startDate).format("YYYY.MM.DD")} ~ {dayjs(data.endDate).format("YYYY.MM.DD")}
          </S.Text>
        </S.SpotAndDateContainer>

        <TabAnatomy tabs={["여행 추억"]} selectedTab={selectedTab} onClick={handleTab} />

        {selectedTab === "여행 추억" ? (
          <DetailTravelMemories
            oneLineReview={data.recordTitle}
            overallReview={data.recordContent}
            imageUrl={data.imageUrls}
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
