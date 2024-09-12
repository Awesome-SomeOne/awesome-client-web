import { useQuery, useMutation } from "@tanstack/react-query";

import {
  addPlace,
  generatePlan,
  addPlaces,
  getRecommendPlace,
  getRecommendIsland,
  getPlans,
  getPlan,
  searchPlace,
  searchIsland,
  getPopularPlace,
  deletePlace,
  deleteTravel,
  updatePlace
} from "./myTrip.apis";
import {
  GeneratePlanData,
  AddPlaceData,
  AddPlacesData,
  GetRecommendPlaceData,
  UpdatePlaceData,
  GetPlanData,
  SearchPlaceData,
  GetPopularPlaceData
} from "./myTrip.type";

export const useGeneratePlan = (data: GeneratePlanData) => {
  return useMutation({
    mutationFn: () => generatePlan(data)
  });
};

export const useAddPlace = (data: AddPlaceData) => {
  return useMutation({
    mutationFn: () => addPlace(data)
  });
};

export const useAddPlaces = (data: AddPlacesData) => {
  return useMutation({
    mutationFn: () => addPlaces(data)
  });
};

export const useGetRecommendPlace = (data: GetRecommendPlaceData) => {
  return useQuery({
    queryKey: ["recommendPlace", data],
    queryFn: () => getRecommendPlace(data),
    enabled: !!data.category && !!data.islandId
  });
};

export const useGetRecommendIsland = () => {
  return useQuery({
    queryKey: ["recommendIsland"],
    queryFn: getRecommendIsland
  });
};

export const useGetPlans = () => {
  return useQuery({
    queryKey: ["plans"],
    queryFn: getPlans
  });
};

export const useGetPlan = (data: GetPlanData) => {
  return useQuery({
    queryKey: ["plan", data.planId],
    queryFn: () => getPlan(data),
    enabled: !!data.planId
  });
};

export const useSearchPlace = (data: SearchPlaceData) => {
  return useQuery({
    queryKey: ["searchPlace", data.keyword],
    queryFn: () => searchPlace(data)
  });
};

export const useSearchIsland = (data: SearchPlaceData) => {
  return useQuery({
    queryKey: ["searchIsland", data.keyword],
    queryFn: () => searchIsland(data)
  });
};

export const useGetPopularPlace = (data: GetPopularPlaceData) => {
  return useQuery({
    queryKey: ["popularPlace", data.islandId],
    queryFn: () => getPopularPlace(data)
  });
};

export const useDeletePlace = () => {
  return useMutation({
    mutationFn: (data: { travelPlaceId: number }) => deletePlace(data)
  });
};

export const useDeleteTravel = () => {
  return useMutation({
    mutationFn: (data: { planId: number }) => deleteTravel(data)
  });
};

export const useUpdatePlace = () => {
  return useMutation({
    mutationFn: (data: UpdatePlaceData[]) => updatePlace(data)
  });
};
