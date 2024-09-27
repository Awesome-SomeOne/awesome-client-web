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
  islandId: number;
  category: string;
}

export interface GetPlanData {
  planId: number;
}

export interface TravelPlaceResponse {
  id: number;
  name: string;
  address: string;
  x_address: string;
  y_address: string;
  category: Business_category;
  date: string;
  order: number;
  imgUrl: string;
}

export type Business_category = "숙박" | "식당" | "관광지" | "액티비티";

export interface GetMyTripRecordDetailData {
  planName: string;
  islandName: string;
  startDate: string;
  endDate: string;
  travelPlaceList: TravelPlaceResponse[];
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
