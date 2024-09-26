import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const MyTrip = () => {
  const navigate = useNavigate();
  return (
    <S.MyTripLayout>
      {/* 다녀온 여행 없을 때 */}
      <GeneralHeader title="내 여행 추억" spacingSize="md" titleSize="sm" />
      <S.MyTripContainer>
        <S.BlueBox>
          <S.Paragraph>아직 다녀온 여행이 없어요!</S.Paragraph>
          <Button text="내 여행에서 추억 만들기" onClick={() => navigate(PATH.MY_TRIP_GENERATE)} />
        </S.BlueBox>
      </S.MyTripContainer>

      {/* 다녀온 여행 있을 때 */}
      <GeneralHeader
        title="내 여행 추억"
        sub="추억 모아보기"
        spacingSize="md"
        titleSize="sm"
        subColor="#1A80E5"
        subOnClick={() => navigate(PATH.MY_TRIP_RECORD_LIST)}
      />
      <S.MyTripContainer>
        <S.ImageBox>
          <S.Chip>{`${1}일전`}</S.Chip>
          <S.Info>
            <S.Title>제목최대여덟글자</S.Title>
            <S.Itinerary>
              {"2024.06.25"}~
              <br />
              {"2024.06.30"}
            </S.Itinerary>
          </S.Info>
        </S.ImageBox>
      </S.MyTripContainer>
    </S.MyTripLayout>
  );
};

export default MyTrip;
