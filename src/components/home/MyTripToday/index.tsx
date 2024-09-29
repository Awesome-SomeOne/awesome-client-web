import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { useGetPlans } from "@/apis/myTrip/myTrip.queries";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

interface Plan {
  planId: number;
  name: string;
  address: string;
  start_date: string;
  end_date: string;
  status: string;
  img_url: string;
}

const MyTripTodayContent = () => {
  const navigate = useNavigate();
  const { data: plans = [] } = useGetPlans();
  const today = dayjs();

  const currentPlans = plans.filter(
    (plan: Plan) => dayjs(plan.start_date).isSameOrBefore(today) || dayjs(plan.end_date).isSameOrAfter(today)
  );

  const plan = currentPlans.sort((a: Plan, b: Plan) => dayjs(a.end_date).diff(dayjs(b.end_date)))[0];

  if (!plan) return <></>;

  return (
    <S.TripLayout>
      <S.GradientBorder onClick={() => navigate(PATH.MY_TRIP(plan.planId))}>
        <S.Box>
          <S.Left>
            <S.Paragraph>여행 시작! 일정을 확인해봐요</S.Paragraph>
            <S.Info>
              <S.Image src={plan.img_url} />
              <S.Address>{plan.address}</S.Address>
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
