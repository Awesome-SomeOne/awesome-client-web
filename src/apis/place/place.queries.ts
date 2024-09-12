import { useSuspenseQuery } from "@tanstack/react-query";
import { getLandmarkPlaces, getRecommendPlaces, getPlace } from "./place.apis";
import { GetLandmarkPlacesProps, GetRecommendPlacesProps, GetPlaceProps } from "./place.type";

export const useGetLandmarkPlaces = (data: GetLandmarkPlacesProps) => {
  return useSuspenseQuery({
    queryKey: ["landmarkPlaces", data.islandId],
    queryFn: () => getLandmarkPlaces(data)
  });
};

export const useGetRecommendPlaces = (data: GetRecommendPlacesProps) => {
  return useSuspenseQuery({
    queryKey: ["recommendPlaces", data.islandId, data.category],
    queryFn: () => getRecommendPlaces(data)
  });
};

export const useGetPlace = (data: GetPlaceProps) => {
  return useSuspenseQuery({
    queryKey: ["place", data.businessId],
    queryFn: () => getPlace(data)
  });
};
