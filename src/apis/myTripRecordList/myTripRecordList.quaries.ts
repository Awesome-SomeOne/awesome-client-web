import { useQuery } from "@tanstack/react-query";
import { getMyTripRecordList } from "./myTripRecordList.apis";

// 추억 모아보기 조회
export const useGetMyTripRecordList = () => {
  return useQuery({
    queryKey: ["tripRecordList"],
    queryFn: () => getMyTripRecordList()
  });
};
