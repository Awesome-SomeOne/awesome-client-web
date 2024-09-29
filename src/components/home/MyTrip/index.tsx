import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import { useGetPlan, useGetPlans } from "@/apis/myTrip/myTrip.queries";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

dayjs.extend(relativeTime);
dayjs.locale("ko");

interface Plan {
  planId: number;
  name: string;
  address: string;
  start_date: string;
  end_date: string;
  status: string;
  img_url: string;
}

const MyTrip = () => {
  const navigate = useNavigate();
  const { data: plans = [] } = useGetPlans();
  const today = dayjs();

  const pastPlans = plans?.filter((plan: Plan) => dayjs(plan.end_date).isBefore(today));
  const mostRecentPastPlan = pastPlans?.sort((a: Plan, b: Plan) => dayjs(b.end_date).diff(dayjs(a.end_date)))[0];

  const {
    data: { islandName }
  } = useGetPlan({ planId: mostRecentPastPlan.planId });
  const credit = ISLAND_LIST.find((island) => island.name === islandName)?.credit;

  return (
    <S.MyTripLayout>
      {!plans.length ? (
        /* 다녀온 여행 없을 때 */
        <>
          <GeneralHeader title="내 여행 추억" spacingSize="md" titleSize="sm" />
          <S.MyTripContainer>
            <S.BlueBox>
              <S.Paragraph>아직 다녀온 여행이 없어요!</S.Paragraph>
              <Button text="내 여행에서 추억 만들기" onClick={() => navigate(PATH.MY_TRIP_GENERATE)} />
            </S.BlueBox>
          </S.MyTripContainer>
        </>
      ) : (
        /* 다녀온 여행 있을 때 */
        <div onClick={() => navigate(PATH.MY_TRIP(mostRecentPastPlan.planId))}>
          <GeneralHeader
            title="내 여행 추억"
            sub="추억 모아보기"
            spacingSize="md"
            titleSize="sm"
            subColor="#1A80E5"
            subOnClick={() => navigate(PATH.MY_TRIP_RECORD_LIST)}
          />
          <S.MyTripContainer>
            <S.ImageBox bgUrl={mostRecentPastPlan.img_url} credit={credit || ""}>
              <S.Chip>{`${dayjs(mostRecentPastPlan.end_date).fromNow(true)}전`}</S.Chip>
              <S.Info>
                <S.Title>{mostRecentPastPlan.name}</S.Title>
                <S.Itinerary>
                  {dayjs(mostRecentPastPlan.start_date).format("YYYY.MM.DD")}~
                  <br />
                  {dayjs(mostRecentPastPlan.end_date).format("YYYY.MM.DD")}
                </S.Itinerary>
              </S.Info>
            </S.ImageBox>
          </S.MyTripContainer>
        </div>
      )}
    </S.MyTripLayout>
  );
};

export default MyTrip;
