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
  businessReviews: any;
  imageUrls: string[];
  recordTitle: string;
  recordContent: string;
  planId: number;
  publicPrivate: boolean;
  recordId: number;
  userId: number;
  islandName: string;
  endDate: string;
  startDate: string;
  planName: string;
  status: string;
}

export interface BusinessReview {
  businessId: number;
  businessReview: string;
  id: number;
  imageUrls: string[];
  rating: number;
  userId: number;
  travelDateImages: any;
  xaddress: string;
  yaddress: string;
}

export interface GetMyTripPlaceRes {
  address: string;
  businessId: number;
  businessName: string;
  businessType: string;
  favorite: boolean;
  imageUrl: string;
  mapX: string;
  mapY: string;
}


address
: 
"주소2"
businessId
: 
2
businessName
: 
"이름2"
businessType
: 
"숙박"
favorite
: 
true
imageUrl
: 
"a"
mapX
: 
"127"
mapY
: 
"32"
 */