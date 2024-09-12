import customAxios from "../instance";
import { GetLandmarkPlacesProps, GetPlaceProps, GetRecommendPlacesProps } from "./place.type";

export const getLandmarkPlaces = async (data: GetLandmarkPlacesProps) => {
  const response = await customAxios.get("/api/popularity/landmark/list", { params: data });
  return response.data;
};

export const getRecommendPlaces = async (data: GetRecommendPlacesProps) => {
  const response = await customAxios.get("/api/popularity/recommend/place", { params: data });
  return response.data;
};

export const getPlace = async (data: GetPlaceProps) => {
  const response = await customAxios.get("/api/popularity/api/popularity", { params: data });
  return response.data;
};
