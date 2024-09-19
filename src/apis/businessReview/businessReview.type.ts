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

export interface GetMyTripRecordDetailRes {
  businessReviews: BusinessReview[];
  imageUrl: string[];
  oneLineReview: string;
  overallReview: string;
  planId: number;
  publicPrivate: boolean;
  recordId: number;
  userId: number;
}

export interface BusinessReview {
  businessId: number;
  businessReview: string;
  id: number;
  imageUrls: string[];
  rating: number;
  userId: number;
}
