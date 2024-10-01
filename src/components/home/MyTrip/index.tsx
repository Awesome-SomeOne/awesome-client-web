import { useGetMyTripRecordList } from "@/apis/myTripRecordList/myTripRecordList.quaries";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

dayjs.extend(relativeTime);
dayjs.locale("ko");
interface Records {
  planId: number;
  islandName: string;
  recordTitle: string;
  recordContent: string;
  imageUrls: string;
  startDate: string;
  endDate: string;
}

const MyTripContent = () => {
  const navigate = useNavigate();
  const { data: records = [] } = useGetMyTripRecordList();
  const today = dayjs();

  const pastRecords = records?.filter((record: Records) => dayjs(record.endDate).isBefore(today));
  const mostRecentPastRecord = pastRecords?.sort((a: Records, b: Records) =>
    dayjs(b.endDate).diff(dayjs(a.endDate))
  )[0];

  return (
    <S.MyTripLayout>
      {!records.length ? (
        /* 다녀온 여행 없을 때 */
        <>
          <GeneralHeader title="내 여행 추억" spacingSize="md" titleSize="sm" />
          <S.MyTripContainer>
            <S.BlueBox>
              <S.Paragraph>아직 다녀온 여행이 없어요!</S.Paragraph>
              <Button text="내 여행에서 추억 만들기" onClick={() => navigate(PATH.MY_TRIP_LIST)} />
            </S.BlueBox>
          </S.MyTripContainer>
        </>
      ) : (
        /* 다녀온 여행 있을 때 */
        <div>
          <GeneralHeader
            title="내 여행 추억"
            sub="추억 모아보기"
            spacingSize="md"
            titleSize="sm"
            subColor="#1A80E5"
            subOnClick={() => navigate(PATH.MY_TRIP_RECORD_LIST)}
          />
          <S.MyTripContainer onClick={() => navigate(PATH.MY_TRIP(mostRecentPastRecord.planId))}>
            <S.ImageBox bgUrl={mostRecentPastRecord.imageUrls[0]} credit={mostRecentPastRecord.islandName}>
              <S.Chip>{`${dayjs(mostRecentPastRecord.end_date).fromNow(true)}전`}</S.Chip>
              <S.Info>
                <S.Title>{mostRecentPastRecord.recordTitle}</S.Title>
                <S.Itinerary>
                  {dayjs(mostRecentPastRecord.startDate).format("YYYY.MM.DD")}~
                  <br />
                  {dayjs(mostRecentPastRecord.endDate).format("YYYY.MM.DD")}
                </S.Itinerary>
              </S.Info>
            </S.ImageBox>
          </S.MyTripContainer>
        </div>
      )}
    </S.MyTripLayout>
  );
};

const MyTrip = () => {
  return (
    <ErrorBoundary fallback={<></>}>
      <Suspense fallback={<>로딩중...</>}>
        <MyTripContent />
      </Suspense>
    </ErrorBoundary>
  );
};

export default MyTrip;
