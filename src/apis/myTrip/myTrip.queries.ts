import { useQuery, useMutation, useSuspenseQuery } from "@tanstack/react-query";

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

export const useGeneratePlan = () => {
  return useMutation({
    mutationFn: (data: GeneratePlanData) => generatePlan(data)
  });
};

export const useAddPlace = () => {
  return useMutation({
    mutationFn: (data: AddPlaceData) => addPlace(data)
  });
};

export const useAddPlaces = () => {
  return useMutation({
    mutationFn: (data: AddPlacesData) => addPlaces(data)
  });
};

export const useGetRecommendPlace = (data: GetRecommendPlaceData) => {
  return useSuspenseQuery({
    queryKey: ["recommendPlace", data],
    queryFn: () => getRecommendPlace(data)
  });
};

export const useGetRecommendIsland = () => {
  return useSuspenseQuery({
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
  return useSuspenseQuery({
    queryKey: ["plan", data.planId],
    queryFn: () => getPlan(data)
    // enabled: !!data.planId
  });
};

export const useSearchPlace = (data: SearchPlaceData) => {
  return useQuery({
    queryKey: ["searchPlace", data.keyword],
    queryFn: () => searchPlace(data),
    enabled: !!data.keyword
  });
};

export const useSearchIsland = (data: SearchPlaceData) => {
  return useQuery({
    queryKey: ["searchIsland", data.keyword],
    queryFn: () => searchIsland(data),
    enabled: !!data.keyword
  });
};

export const useGetPopularPlace = (data: GetPopularPlaceData) => {
  return useQuery({
    queryKey: ["popularPlace", data.islandId],
    queryFn: () => getPopularPlace(data),
    enabled: !!data.islandId
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
