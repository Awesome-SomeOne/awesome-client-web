import Divider from "@/components/common/divider";
import SpotCard from "../SpotCard";
import * as S from "./styles";

const DetailSchedule = () => {
  return (
    <>
      {/* TODO: S.DayContainer 묶은거 Map돌리기 */}
      <S.DayContainer>
        <S.DateWrapper>
          <S.Text className="day-index">Day 1</S.Text>
          <S.Text className="date">2024.06.28</S.Text>
        </S.DateWrapper>

        <SpotCard isShowReview={false} />
        <SpotCard isShowReview={false} />
      </S.DayContainer>
      <Divider />

      <S.DayContainer>
        <S.DateWrapper>
          <S.Text className="day-index">Day 2</S.Text>
          <S.Text className="date">2024.06.28</S.Text>
        </S.DateWrapper>

        <SpotCard isShowReview={false} />
        <SpotCard isShowReview={false} />
      </S.DayContainer>
    </>
  );
};

export default DetailSchedule;
