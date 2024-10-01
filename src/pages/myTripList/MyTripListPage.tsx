import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Suspense, useEffect } from "react";
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
  const queryClient = useQueryClient();

  if (!myTripListData || myTripListData.length === 0) {
    return (
      <S.MyTripLayout>
        <img src="/images/plane.svg" alt="비행기 이미지" />
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

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["getMyTripList"] });
  }, []);

  return (
    <S.MyTripListPageWrapper>
      <Appbar title="내 여행 목록" textAlign="center" />
      <S.MyTripListFlexContainer>
        {myTripListData.map((trip) => (
          <TripCard
            id={trip.planId}
            recordId={trip.recordId}
            imgSrc={trip.img_url}
            status={trip.status}
            location={trip.address}
            startDate={dayjs(trip.start_date).format("YYYY.MM.DD")}
            endDate={dayjs(trip.end_date).format("YYYY.MM.DD")}
            onClick={() => {
              navigate(PATH.MY_TRIP(trip.planId));
            }}
          />
        ))}
      </S.MyTripListFlexContainer>
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
