import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import BottomSheet from "@/components/common/bottomSheet/index";
import Appbar from "@/components/common/header/Appbar";
import DetailPage from "@/components/place/placeDetail/index";
import Toast from "@/components/myTrip/toast/index";
import { AnimatePresence } from "framer-motion";
import { Suspense, useEffect, useState } from "react";
import ReportPage from "./report/ReportPage";
import { useParams } from "react-router-dom";
import { useGetPlace, useLike, useUnlike } from "@/apis/place/place.queries";
import * as S from "./styles";
import ErrorBoundary from "@/hooks/Errorboundary";

const PlaceDetail = () => {
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showReportPage, setShowReportPage] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const { placeId } = useParams<{ placeId: string }>();
  const { data } = useGetPlace({ businessId: parseInt(placeId || "0") });

  const { mutateAsync: likePlace } = useLike();
  const { mutateAsync: unlikePlace } = useUnlike();

  const [like, setLike] = useState(data.status);

  useEffect(() => {
    if (data) {
      setLike(data.status);
    }
  }, [data]);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  const handleLike = async (event: any) => {
    event.stopPropagation();

    try {
      if (like) {
        await unlikePlace({ businessId: data.businessId });
      } else {
        await likePlace({ businessId: data.businessId });
      }
      setLike((prev: boolean) => !prev);
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
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
            <img src={like ? "/icons/like-fill.svg" : "/icons/like.svg"} />
          </div>
        }
        rightIcon2={
          <div onClick={() => navigate(-1)}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <DetailPage data={data} onMoreClick={handleMoreClick} like={like} handleLike={handleLike} />
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

const PlaceDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ paddingTop: "56px" }}>
        <ErrorBoundary
          fallback={
            <>
              <Appbar
                title=""
                textAlign="center"
                rightIcon1={
                  <div onClick={() => navigate(-1)}>
                    <ClearIcon size="28" />
                  </div>
                }
              />
              에러 발생
            </>
          }
        >
          <Suspense fallback={<>로딩중...</>}>
            <PlaceDetail />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default PlaceDetailPage;
