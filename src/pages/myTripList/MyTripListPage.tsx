import Button from "@/components/common/button";
import Appbar from "@/components/common/header/Appbar";
import TripCard from "@/components/myTripList/TripCard";

import * as S from "./styles";

const MyTripListPage = () => {
  return (
    <S.MyTripListPageWrapper>
      {/* 나중에 TripCard 컴포넌트 분리하기 */}
      <S.TripCard>
        <S.ImageAndTextContainer>
          <S.ImageWrapper src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" />
          <S.TextWrapper>
            <S.TripStatusText>여행완료</S.TripStatusText>
            <S.TripLocationText>경상북도 울릉도</S.TripLocationText>
            <S.TripTimeText>2021.09.01 - 2021.09.05</S.TripTimeText>
          </S.TextWrapper>
        </S.ImageAndTextContainer>
        <S.ButtonWrapper>
          <LineButton text="추억 기록하기" size="sm" style={{ width: "100%" }} />
          <LineButton text="편집하기" size="sm" style={{ width: "100%" }} />
        </S.ButtonWrapper>
      </S.TripCard>
    </S.MyTripListPageWrapper>
  );
};

export default MyTripListPage;
