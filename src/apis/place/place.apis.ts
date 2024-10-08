import { customAxios } from "../instance";
import { GetLandmarkPlacesProps, GetPlaceProps, GetRecommendPlacesProps, GetLikedPlacesProps } from "./place.type";
import qs from "qs";

export const getLandmarkPlaces = async (data: GetLandmarkPlacesProps) => {
  const response = await customAxios.get("/api/popularity/landmark/list", { params: data });
  return response.data;
};

export const getRecommendPlaces = async (data: GetRecommendPlacesProps) => {
  const response = await customAxios.get("/api/popularity/recommend/place", { params: data });
  return response.data;
};

export const getPlace = async (data: GetPlaceProps) => {
  const response = await customAxios.get("/api/popularity/landmark", { params: data });
  return response.data;
};

export const getLikedPlaces = async (data: GetLikedPlacesProps) => {
  const response = await customAxios.get(`/api/favorites/business-type/${data.businessType}`);
  return response.data;
};

export const searchPlaces = async (data: { keyword: string }) => {
  const response = await customAxios.get("/api/map/businesses/search", { params: data });
  return response.data;
};

export const like = async (data: { businessId: number }) => {
  const response = await customAxios.post("/api/favorites/add", qs.stringify(data), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  return response.status;
};

export const unlike = async (data: { businessId: number }) => {
  const response = await customAxios.delete("/api/favorites/remove", {
    data: qs.stringify(data),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  return response.status;
};
