import { useMutation } from "@tanstack/react-query";

import { postCreateTravelRecord, postIslandReview } from "./businessReview.apis";
import { PostIslandReviewReq } from "./businessReview.type";

// 섬 리뷰 생성 또는 업데이트
export const usePostIslandReview = () => {
  return useMutation({
    mutationFn: (req: PostIslandReviewReq) => postIslandReview(req)
  });
};

// 추억 생성하기
export const usePostCreateTravelRecord = () => {
  return useMutation({
    mutationFn: (req: FormData) => postCreateTravelRecord(req)
  });
};
