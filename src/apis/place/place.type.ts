export interface GetLandmarkPlacesProps {
  islandId: number;
}

export interface GetRecommendPlacesProps {
  islandId: number;
  category: string; // enum 타입
}

export interface GetPlaceProps {
  businessId: number;
}
