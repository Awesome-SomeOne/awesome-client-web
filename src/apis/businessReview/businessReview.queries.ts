import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useNavigate } from "react-router-dom";

import {
  getMyTripPlace,
  getMyTripRecordDetail,
  getTravelRecordByPlanId,
  postCreateTravelRecord,
  postIslandReview,
  postUpdateTravelRecord
} from "./businessReview.apis";
import { PostIslandReviewReq } from "./businessReview.type";
import { PATH } from "@/constants/path";

// 섬 리뷰 생성 또는 업데이트
export const usePostIslandReview = () => {
  return useMutation({
    mutationFn: (req: PostIslandReviewReq) => postIslandReview(req)
  });
};

// 추억 기록 생성하기
export const usePostCreateTravelRecord = (planId: number) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (req: FormData) => postCreateTravelRecord(req),
    onSuccess: (res) => {
      navigate(PATH.MY_TRIP_RECORD_DETAIL(planId, res.recordId));
    }
  });
};

// 추억 기록 수정하기
export const usePostUpdateTravelRecord = (planId: number) => {
  const navigate = useNavigate();

  return useMutation({
    // mutationFn: (req: FormData) => postUpdateTravelRecord(req, recordId),
    mutationFn: (req: FormData) => postUpdateTravelRecord(req),
    onSuccess: (res) => {
      console.log("res", res);
      navigate(PATH.MY_TRIP_RECORD_DETAIL(planId, res.recordId));
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

// 추억 기록하기 - 여행 기록별 조회
export const useGetTravelRecordByPlanId = (planId: number) => {
  return useQuery({
    queryKey: ["travelRecordByPlanId"],
    queryFn: () => getTravelRecordByPlanId(planId),
    select: (data) => {
      return data[data.length - 1];
    }
  });
};

// 지도 - 내 여행 장소 가져오기
export const useGetMyTripPlace = () => {
  return useQuery({
    queryKey: ["getMyTripPlaceInMap"],
    queryFn: () => getMyTripPlace()
  });
};
