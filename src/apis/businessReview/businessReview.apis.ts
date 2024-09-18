import customAxios from "../instance";
import { PostCreateTravelRecordReq, PostIslandReviewReq } from "./businessReview.type";

// 섬 리뷰 생성 또는 업데이트
export const postIslandReview = async (req: PostIslandReviewReq) => {
  const response = await customAxios.post("/api/business-reviews/createOrUpdate", req);
  return response.data;
};

// 추억 생성하기
export const postCreateTravelRecord = async (req: PostCreateTravelRecordReq) => {
  const response = await customAxios.post("/api/travel-records/create", req);
  return response.data;
};
