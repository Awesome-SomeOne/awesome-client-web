import { useSuspenseQuery } from "@tanstack/react-query";

import { getMyTripList } from "./travel.apis";

// 내 여행 리스트 조회
export const useGetMyTripList = () => {
  return useSuspenseQuery({
    queryKey: ["getMyTripList"],
    queryFn: () => getMyTripList(),
    staleTime: 1000 * 60 * 60
  });
};
