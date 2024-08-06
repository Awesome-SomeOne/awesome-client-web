import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path";
import LineButton from "../../common/lineButton";
import * as S from "./styles";

interface ITripCardProps {
  id: number;
  imgSrc: string;
  status: string; // TODO: enum으로 변경
  location: string;
  startDate: string;
  endDate: string;
}

const TripCard = ({ id, imgSrc, status, location, startDate, endDate }: ITripCardProps) => {
  const navigate = useNavigate();

  return (
    <S.TripCard>
      <S.ImageAndTextContainer>
        <S.ImageWrapper src={imgSrc} />
        <S.TextWrapper>
          <S.TripStatusText>{status}</S.TripStatusText>
          <S.TripLocationText>{location}</S.TripLocationText>
          <S.TripTimeText>
            {startDate} - {endDate}
          </S.TripTimeText>
        </S.TextWrapper>
      </S.ImageAndTextContainer>
      <S.ButtonWrapper>
        <LineButton
          text="추억 기록하기"
          onClick={() => navigate(PATH.MY_TRIP_RECORD(id))}
          size="sm"
          style={{ width: "100%" }}
        />
        <LineButton text="편집하기" size="sm" style={{ width: "100%" }} />
      </S.ButtonWrapper>
    </S.TripCard>
  );
};

export default TripCard;
