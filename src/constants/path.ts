export const PATH = {
  ROOT: "/",
  MY_TRIP_LIST: "/my-trip-list", // 내 여행 목록 페이지
  MY_TRIP_RECORD: (tripId?: number) => `/my-trip-record/${tripId ?? ":tripId"}`, // 추억 기록하기 페이지
  MY_TRIP_RECORD_DETAIL: (tripId?: number) => `/my-trip-record/${tripId ?? ":tripId"}/detail`, // 추억 기록하기 상세 페이지
  MAP: "/map", // 지도 페이지
  COMMUNITY: "/community" // 커뮤니티 페이지
};

Object.freeze(PATH);
