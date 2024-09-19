import { customAxios } from "../instance";
import {
  AddPlaceData,
  AddPlacesData,
  GeneratePlanData,
  GetPlanData,
  GetPopularPlaceData,
  GetRecommendPlaceData,
  SearchPlaceData,
  UpdatePlaceData
} from "./myTrip.type";

export const generatePlan = async (data: GeneratePlanData) => {
  const response = await customAxios.post("/api/travel/save", data);
  return response.data;
};

export const addPlace = async (data: AddPlaceData) => {
  const response = await customAxios.post("/api/travel/addPlace", data);
  return response.data;
};

export const addPlaces = async (data: AddPlacesData) => {
  const response = await customAxios.post("/api/travel/addManyPlace", data);
  return response.data;
};

export const getRecommendPlace = async (data: GetRecommendPlaceData) => {
  const response = await customAxios.get("/api/travel/recommend/place", { params: data });
  return response.data;
};

export const getRecommendIsland = async () => {
  const response = await customAxios.get("/api/travel/recommend/island");
  return response.data;
};

export const getPlans = async () => {
  const response = await customAxios.get("/api/travel/plans");
  return response.data;
};

export const getPlan = async (data: GetPlanData) => {
  const response = await customAxios.get("/api/travel/plan", { params: data });
  return response.data;
};

export const searchPlace = async (data: SearchPlaceData) => {
  const response = await customAxios.get("/api/travel/findPlace", { params: data });
  return response.data;
};

export const searchIsland = async (data: SearchPlaceData) => {
  const response = await customAxios.get("/api/travel/findIsland", { params: data });
  return response.data;
};

export const getPopularPlace = async (data: GetPopularPlaceData) => {
  const response = await customAxios.get("/api/travel/famous/place", { params: data });
  return response.data;
};

export const deletePlace = async (data: { travelPlaceId: number }) => {
  const response = await customAxios.delete("/api/travel/deletePlace", { data });
  return response.data;
};

export const deleteTravel = async (data: { planId: number }) => {
  const response = await customAxios.delete("/api/travel/delete/travel", { data });
  return response.data;
};

export const updatePlace = async (data: UpdatePlaceData[]) => {
  const response = await customAxios.post("/api/travel/update/place", data);
  return response.data;
};
