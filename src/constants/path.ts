export const PATH = {
  ROOT: "/",
  MY_TRIP_LIST: "/my-trip-list", // 내 여행 목록 페이지
  MY_TRIP_RECORD: (tripId?: number) => `/my-trip-record/${tripId ?? ":tripId"}`, // 추억 기록하기 페이지
  MY_TRIP_RECORD_DETAIL: (tripId?: number) => `/my-trip-record/${tripId ?? ":tripId"}/detail`, // 추억 기록하기 상세 페이지
  MAP: "/map", // 지도 페이지
  MY_TRIP_GENERATE: "/my-trip", // 내 여행 생성 페이지
  MY_TRIP: (tripId?: number) => `/my-trip/${tripId ?? ":tripId"}`, // 내 여행 조회 페이지
  COMMUNITY: "/community", // 커뮤니티 페이지
  MY_TRIP_RECORD_LIST: "/my-trip-record-list", // 추억 모아보기
  LOCATION: "/location", // 위치 변경 페이지
  SEARCH: "/search", // 검색 페이지
  LIKE: "/like", // 좋아요 모음 페이지
  NOTIFICATION: "/notification", // 알림센터 페이지
  POPULAR_PLACE: "popular", // 인기 관광지 둘러보기 페이지
  RECOMMEND_PLACE: "recommend", // 추천 장소 더보기 페이지
  PLACE_DETAIL: (placeId?: number) => `/place/${placeId ?? ":placeId"}` // 장소 상세 페이지
};

Object.freeze(PATH);
