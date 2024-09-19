import { customAxios, customAxiosMultipart } from "../instance";
import { GetMyTripRecordDetailRes, PostIslandReviewReq } from "./businessReview.type";

// 섬 리뷰 생성 또는 업데이트
export const postIslandReview = async (req: PostIslandReviewReq) => {
  const response = await customAxios.post("/api/business-reviews/createOrUpdate", req);
  return response.data;
};

// 추억 생성하기
export const postCreateTravelRecord = async (req: FormData) => {
  const response = await customAxiosMultipart.post("/api/travel-records/create", req);
  return response.data;
};

// 내 추억 기록 상세 페이지 조회
export const getMyTripRecordDetail = async (recordId: number): Promise<GetMyTripRecordDetailRes> => {
  const response = await customAxios.get(`/api/travel-records/view/${recordId}`);
  return response.data;
};
