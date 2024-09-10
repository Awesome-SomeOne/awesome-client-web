import customAxios from "../instance";

// 내 여행 리스트 조회
export const getMyTripList = async () => {
  const response = await customAxios.get("/api/travel/plans");
  return response.data;
};
