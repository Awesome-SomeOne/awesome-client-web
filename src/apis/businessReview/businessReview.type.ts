export interface PostIslandReviewReq {
  request: { businessId: number; userId: number; rating: number; businessReview: string };
  images: File[] | null;
}

export interface PostCreateTravelRecordReq {
  planId: number;
  oneLineReview: string;
  overallReview: string;
  publicPrivate: boolean;
  images: File[] | null;
}
