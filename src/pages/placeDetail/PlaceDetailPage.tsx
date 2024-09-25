import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import BottomSheet from "@/components/common/bottomSheet/index";
import Appbar from "@/components/common/header/Appbar";
import DetailPage from "@/components/place/placeDetail/index";
import Toast from "@/components/myTrip/toast/index";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ReportPage from "./report/ReportPage";
import * as S from "./styles";

const PlaceDetailPage = () => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showReportPage, setShowReportPage] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  const handleLike = () => {
    // 찜하기 처리하기
  };

  const handleMoreClick = () => {
    // 내 리뷰일 때
    // setShowDelete(true);
    // 내 리뷰가 아닐 때
    setShowReport(true);
  };

  return !showReportPage ? (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <AnimatePresence>{showToast && <Toast message={"리뷰 삭제 완료!"} />}</AnimatePresence>
      <Appbar
        title=""
        textAlign="center"
        rightIcon1={
          <div onClick={handleLike}>
            <img src="/src/assets/icons/like.svg" alt="" />
          </div>
        }
        rightIcon2={
          <div onClick={() => navigate(-1)}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <DetailPage onMoreClick={handleMoreClick} />
      <BottomSheet isOpen={showDelete} close={() => setShowDelete(false)}>
        <S.BottomSheetContainer>
          <S.Delete
            onClick={() => {
              setShowDelete(false);
              // 삭제 처리하기
              setShowToast(true);
            }}
          >
            삭제하기
          </S.Delete>
        </S.BottomSheetContainer>
      </BottomSheet>
      <BottomSheet isOpen={showReport} close={() => setShowReport(false)}>
        <S.BottomSheetContainer>
          <S.Delete
            onClick={() => {
              setShowReport(false);
              // 신고 처리하기
              setShowReportPage(true);
            }}
          >
            신고하기
          </S.Delete>
        </S.BottomSheetContainer>
      </BottomSheet>
    </div>
  ) : (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
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
  );
};

export default PlaceDetailPage;
