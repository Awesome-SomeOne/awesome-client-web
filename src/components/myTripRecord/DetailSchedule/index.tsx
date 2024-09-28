import SpotCard from "../SpotCard";
import { BusinessReview } from "@/apis/businessReview/businessReview.type";
import Divider from "@/components/common/divider";

import * as S from "./styles";

interface DetailScheduleProps {
  businessReviews: BusinessReview[];
}
const DetailSchedule = ({ businessReviews }: DetailScheduleProps) => {
  const keysArray = Object.keys(businessReviews).sort((a, b) => a - b);

  // const displayData = (keys) => {
  //   keys.forEach((key) => {
  //     console.log(`Date: ${key}`);
  //     businessReviews[key].forEach((event) => {
  //       console.log(`  - ${event.businessName}`);
  //     });
  //   });
  // };
  // displayData(keysArray);

  console.log(businessReviews);
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
