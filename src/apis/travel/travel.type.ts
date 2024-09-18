// travel api 타입 정의
export enum TravelStatus {
  BEFORE = "여행전",
  ONGOING = "여행중",
  COMPLETED = "여행완료"
}

export interface MyTripItem {
  planId: number;
  name: string;
  address: string;
  start_date: string;
  end_date: string;
  status: TravelStatus;
}
