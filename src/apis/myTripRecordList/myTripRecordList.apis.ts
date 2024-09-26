import { customAxios } from "../instance";

// 추억 모아보기 조회
export const getMyTripRecordList = async () => {
  const response = await customAxios.get("/api/travel-records/view-user");
  return response.data;
};
