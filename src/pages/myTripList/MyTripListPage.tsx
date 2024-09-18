import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

import { useGetMyTripList } from "@/apis/travel/travel.queries";
import BottomNavBar from "@/components/common/bottomNavBar";
import Button from "@/components/common/button";
import Appbar from "@/components/common/header/Appbar";
import TripCard from "@/components/myTripList/TripCard";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";

import * as S from "./styles";

const MyTripListContent = () => {
  const navigate = useNavigate();
  const { data: myTripListData } = useGetMyTripList();

  if (!myTripListData) {
    return (
      <S.MyTripLayout>
        <img src="/src/assets/images/plane.svg" alt="비행기 이미지" />
        <S.TextSection>
          <S.Title>섬으로 여행하실 건가요?</S.Title>
          <S.Paragraph>여행 장소를 직접 선택하거나, 추천 받고 일정을 세워봐요!</S.Paragraph>
        </S.TextSection>
        <Button
          text="여행 일정 세우기"
          size="lg"
          onClick={() => navigate(PATH.MY_TRIP_GENERATE)}
          style={{ width: "137px" }}
        />
      </S.MyTripLayout>
    );
  }
  return (
    <S.MyTripListPageWrapper>
      <Appbar title="내 여행 목록" textAlign="center" />
      {/* {myTripListData.map((trip) => ( */}
      <TripCard
        id={1}
        imgSrc="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
        status="여행완료"
        location="경상북도 울릉도"
        startDate="2021.09.01"
        endDate="2021.09.05"
      />
      {/* ))} */}
      <Button text="새로 만들기" size="lg" onClick={() => navigate(PATH.MY_TRIP_GENERATE)} />
    </S.MyTripListPageWrapper>
  );
};

const ErrorFallback = () => (
  <S.MyTripListPageWrapper>
    <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
    <Button text="다시 시도" onClick={() => window.location.reload()} />
  </S.MyTripListPageWrapper>
);

const MyTripListPage = () => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Suspense fallback={<S.MyTripListPageWrapper>로딩중...</S.MyTripListPageWrapper>}>
          <MyTripListContent />
        </Suspense>
      </ErrorBoundary>
      <BottomNavBar />
    </>
  );
};

export default MyTripListPage;
