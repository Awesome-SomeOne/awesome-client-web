import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import { useGetMyTripList } from "@/apis/travel/travel.queries";
import Button from "@/components/common/button";
import Appbar from "@/components/common/header/Appbar";
import TripCard from "@/components/myTripList/TripCard";
import { PATH } from "@/constants/path";

const MyTripListPage = () => {
  const navigate = useNavigate();
  // const { data: myTripListData } = useGetMyTripList();
  // console.log(myTripListData);

  return (
    <>
      <Appbar title="내 여행 목록" textAlign="center" />
      <S.MyTripListPageWrapper>
        {/* 나중에 TripCard 백엔드 데이터 따라 map 돌리기 */}
        <TripCard
          id={1}
          imgSrc="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
          status="여행완료"
          location="경상북도 울릉도"
          startDate="2021.09.01"
          endDate="2021.09.05"
        />

        <Button
          text="새로 만들기"
          size="lg"
          onClick={() => {
            navigate(PATH.MY_TRIP_GENERATE);
          }}
        />
      </S.MyTripListPageWrapper>
    </>
  );
};

export default MyTripListPage;
