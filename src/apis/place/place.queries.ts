import { useSuspenseQuery, useQuery, useMutation } from "@tanstack/react-query";
import {
  getLandmarkPlaces,
  getRecommendPlaces,
  getPlace,
  getLikedPlaces,
  searchPlaces,
  like,
  unlike
} from "./place.apis";
import { GetLandmarkPlacesProps, GetRecommendPlacesProps, GetPlaceProps, GetLikedPlacesProps } from "./place.type";

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

export const useGetLikedPlaces = (data: GetLikedPlacesProps) => {
  return useSuspenseQuery({
    queryKey: ["likedPlaces", data.businessType],
    queryFn: () => getLikedPlaces(data)
  });
};

export const useSearchPlaces = (data: { keyword: string }) => {
  return useQuery({
    queryKey: ["places", data.keyword],
    queryFn: () => searchPlaces(data),
    enabled: !!data.keyword
  });
};

export const useLike = () => {
  return useMutation({
    mutationFn: (data: { businessId: number }) => like(data)
  });
};

export const useUnlike = () => {
  return useMutation({
    mutationFn: (data: { businessId: number }) => unlike(data)
  });
};
