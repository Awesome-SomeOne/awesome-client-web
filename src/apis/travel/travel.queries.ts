import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyTripList } from "./travel.apis";
import { MyTripItem } from "./travel.type";

// 내 여행 리스트 조회
export const useGetMyTripList = () => {
  return useSuspenseQuery<MyTripItem[], Error>({
    queryKey: ["getMyTripList"],
    queryFn: () => getMyTripList()
  });
};
