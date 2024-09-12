export interface GeneratePlanData {
  islandId: number;
  startDate: string;
  endDate: string;
  planName: string;
}

export interface AddPlaceData {
  travelPlanId: number;
  businessId: number;
  date: string;
}

export interface AddPlacesData {
  travelPlanId: number;
  businessIds: number[];
  date: string;
}

export interface GetRecommendPlaceData {
  islandId: number | null;
  category: string | null;
}

export interface GetPlanData {
  planId: number;
}

export interface SearchPlaceData {
  keyword: string;
}

export interface GetPopularPlaceData {
  islandId: number;
}

export interface UpdatePlaceData {
  travelPlaceId: number;
  order: number;
  date: string;
}
