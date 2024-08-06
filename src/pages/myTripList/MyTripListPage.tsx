import Button from "../../components/common/button";
import Appbar from "../../components/common/header/Appbar";
import * as S from "./styles";
import TripCard from "../../components/myTripList/TripCard";

const MyTripListPage = () => {
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

        <Button text="새로 만들기" size="lg" />
      </S.MyTripListPageWrapper>
    </>
  );
};

export default MyTripListPage;
