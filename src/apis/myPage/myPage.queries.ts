import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAccount, getUserInfo } from "./myPage.apis";

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => getUserInfo()
  });
};

export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: () => deleteAccount(),
    onSuccess: () => {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type: "removeAccount" }));
    }
  });
};
