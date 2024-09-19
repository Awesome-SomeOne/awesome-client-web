import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { getMyTripRecordDetail, postCreateTravelRecord, postIslandReview } from "./businessReview.apis";
import { PostIslandReviewReq } from "./businessReview.type";

// 섬 리뷰 생성 또는 업데이트
export const usePostIslandReview = () => {
  return useMutation({
    mutationFn: (req: PostIslandReviewReq) => postIslandReview(req)
  });
};

// 추억 생성하기
export const usePostCreateTravelRecord = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: FormData) => postCreateTravelRecord(req),
    onSuccess: (req) => {
      navigate(`/my-trip-record/${req.tripId}/detail`);
    }
  });
};

// 내 추억 기록 상세 페이지 조회
export const useGetMyTripRecordDetail = (recordId: number) => {
  return useQuery({
    queryKey: ["myTripRecordDetail"],
    queryFn: () => getMyTripRecordDetail(recordId)
  });
};
