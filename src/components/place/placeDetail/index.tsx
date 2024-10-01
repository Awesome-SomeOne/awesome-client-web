import LikeFillIcon from "@/assets/icons/LikeFillIcon";
import LikeIcon from "@/assets/icons/LikeIcon";
import MoreIcon from "@/assets/icons/MoreIcon";
import GeneralHeader from "@/components/common/generalHeader/index";
import LineButton from "@/components/common/lineButton/index";
import MiniMapComponent from "@/components/myTrip/map/miniMap/index";
import { Theme } from "@/styles/theme";
import * as S from "./styles";
const DetailPage = ({
  data,
  onMoreClick,
  like,
  handleLike
}: {
  data: {
    businessName: string;
    address: string;
    imgUrl: string;
    xAddress: string;
    yAddress: string;
    status: boolean;
    reviews: [];
  };
  onMoreClick: () => void;
  like: boolean;
  handleLike: (event: any) => void;
}) => {
  return (
    <S.DetailCotainer>
      <S.DetailImage src={data.imgUrl} />
      <S.DetailInfoContainer>
        <S.DetailHeader>
          <S.TopSection>
            <S.PlaceName>{data.businessName}</S.PlaceName>
            <LineButton
              leadingIcon={like ? <LikeFillIcon /> : <LikeIcon size="24" color={Theme.colors.Label_Primary_Default} />}
              text={like ? "찜 취소" : "찜하기"}
              onClick={handleLike}
            />
          </S.TopSection>
          {/* <S.Time>영업중 | 매일 08:00 - 21:00</S.Time> */}
        </S.DetailHeader>
        <S.InfoContainer>
          <S.Info>
            {/* Icon */}
            {/* 요금정보 */}
          </S.Info>
          <S.Info>
            <img src={"/icons/location_small.svg"} />
            {data.address}
          </S.Info>
          <S.Info>
            {/* <img src={"/icons/phone.svg"} /> */}
            {/* 064-752-3001 */}
          </S.Info>
        </S.InfoContainer>
      </S.DetailInfoContainer>
      {/* 소개글 */}
      {/* <GeneralHeader title="소개글" spacingSize="md" />
      <S.Introduction>
        {
          "햇빛이 너무 맑아 눈물 납니다 살아있구나 느끼니 눈물 납니다 기러기떼 열 지어 북으로 가고 길섶에 풀들도 돌아오는데 당신은 가고 그리움만 남아서가 아닙니다 이렇게 살아있구나 생각하니 눈물납니다"
        }
      </S.Introduction> */}
      {/* 지도 */}
      <MiniMapComponent position={{ lat: parseFloat(data.yAddress), lng: parseFloat(data.xAddress) }} />
      {/* 후기 */}
      <GeneralHeader title="후기" spacingSize="md" />
      {data.reviews.map((review: any) => (
        <Review review={review} onMoreClick={onMoreClick} />
      ))}
    </S.DetailCotainer>
  );
};

const Review = ({
  review,
  onMoreClick
}: {
  review: { user: string; rating: number; content: string };
  onMoreClick: () => void;
}) => {
  return (
    <S.ReviewContainer>
      <S.ReviewHeader>
        <S.UserImage src="/images/user.png" />
        <S.UserCenter>
          <S.UserName>{review.user}</S.UserName>
          {/* <S.Date>{"2024.12.31"}</S.Date> */}
        </S.UserCenter>
        <S.Rating>
          <img src="/icons/star.svg" />
          {review.rating}점
        </S.Rating>
        <div style={{ display: "flex", alignItems: "center" }} onClick={onMoreClick}>
          <MoreIcon size="24" color={Theme.colors.Label_Alternative} />
        </div>
      </S.ReviewHeader>
      <S.ReviewContent>{review.content}</S.ReviewContent>
      {/* <S.ReviewImageContainer>
        <S.ReviewImage src="/images/place.png" />
        <S.ReviewImage src="/images/place.png" />
      </S.ReviewImageContainer> */}
    </S.ReviewContainer>
  );
};

export default DetailPage;
