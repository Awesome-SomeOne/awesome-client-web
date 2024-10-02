import { customAxios } from "../instance";

// 회원 정보 가져오기
export const getUserInfo = async () => {
  const response = await customAxios.get("/api/user/nickname");
  return response.data;
};

// 회원 탈퇴
export const deleteAccount = async () => {
  const response = await customAxios.post("/api/user/unlink");
  return response.data;
};
