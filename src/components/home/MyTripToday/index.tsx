import { useGetPlans } from "@/apis/myTrip/myTrip.queries";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const MyTripTodayContent = () => {
  const navigate = useNavigate();
  const { data: plans = [] } = useGetPlans();

  if (!plans.length) return <></>;

  return (
    <S.TripLayout>
      <S.GradientBorder onClick={() => navigate(PATH.MY_TRIP(plans[0].planId))}>
        <S.Box>
          <S.Left>
            <S.Paragraph>여행 시작! 일정을 확인해봐요</S.Paragraph>
            <S.Info>
              <S.Image src={plans[0].img_url} />
              <S.Address>{plans[0].address}</S.Address>
            </S.Info>
          </S.Left>
          <img src="/icons/right.svg" />
        </S.Box>
      </S.GradientBorder>
    </S.TripLayout>
  );
};

const MyTripToday = () => {
  return (
    <ErrorBoundary fallback={<>에러 발생</>}>
      <Suspense fallback={<>로딩중...</>}>
        <MyTripTodayContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyTripToday;
