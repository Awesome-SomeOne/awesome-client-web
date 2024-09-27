import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: ("Bearer " + localStorage.getItem("token")) as string
  }
});

const customAxiosMultipart: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_SERVER_HOST,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: ("Bearer " + localStorage.getItem("token")) as string,
    "Content-Type": "multipart/form-data"
  }
});

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // NOTE: 일괄 에러 코드 처리한 경우에 여기서 처리하기 (하단 예제 참고)
    // if (error.response.status === 404) {
    //   window.location.href = "/NotFoundPage";
    // }
    return Promise.reject(error);
  }
);

export { customAxios, customAxiosMultipart };
