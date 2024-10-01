import { customAxios } from "../instance";

export const getUserInfo = async () => {
  const response = await customAxios.get("/api/user/nickname");
  return response.data;
};
