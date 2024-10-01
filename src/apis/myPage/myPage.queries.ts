import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "./myPage.apis";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => getUserInfo()
  });
};
