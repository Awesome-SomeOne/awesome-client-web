import LikeIcon from "@/assets/icons/LikeIcon";
import MoreIcon from "@/assets/icons/MoreIcon";
import GeneralHeader from "@/components/common/generalHeader/index";
import LineButton from "@/components/common/lineButton/index";
import MiniMapComponent from "@/components/myTrip/map/miniMap/index";
import { Theme } from "@/styles/theme";
import { useParams } from "react-router-dom";
// import { useGetPlace } from "@/apis/place/place.queries";
import * as S from "./styles";

export const Detail = ({ onMoreClick }: { onMoreClick: () => void }) => {
  const { placeId } = useParams<{ placeId: string }>();
  // const { businessName, address, xAddress, yAddress, imgUrl, reviews } = useGetPlace({ businessId: placeId });
  const businessName = "제주도 동문시장";
  const address = "제주 제주시 관덕로14길 20";
  const xAddress = "126.795841";
  const yAddress = "33.55635";
  const imgUrl = "/src/assets/images/popular1.png";
  const reviews = [];
  return (
    <S.DetailCotainer>
      <S.DetailImage src={imgUrl} />
      <S.DetailInfoContainer>
        <S.DetailHeader>
          <S.TopSection>
            <S.PlaceName>{businessName}</S.PlaceName>
            <LineButton leadingIcon={<LikeIcon size="24" color={Theme.colors.Label_Primary_Default} />} text="찜하기" />
          </S.TopSection>
          <S.Time>영업중 | 매일 08:00 - 21:00</S.Time>
        </S.DetailHeader>
        <S.InfoContainer>
          <S.Info>
            {/* Icon */}
            요금정보
          </S.Info>
          <S.Info>
            <img src={"/src/assets/icons/location_small.svg"} />
            {address}
          </S.Info>
          <S.Info>
            <img src={"/src/assets/icons/phone.svg"} />
            064-752-3001
          </S.Info>
        </S.InfoContainer>
      </S.DetailInfoContainer>
      {/* 소개글 */}
      <GeneralHeader title="소개글" spacingSize="md" />
      <S.Introduction>
        {
          "햇빛이 너무 맑아 눈물 납니다 살아있구나 느끼니 눈물 납니다 기러기떼 열 지어 북으로 가고 길섶에 풀들도 돌아오는데 당신은 가고 그리움만 남아서가 아닙니다 이렇게 살아있구나 생각하니 눈물납니다"
        }
      </S.Introduction>
      {/* 지도 */}
      <MiniMapComponent lat={parseFloat(yAddress)} lng={parseFloat(xAddress)} />
      {/* 후기 */}
      <GeneralHeader title="후기" spacingSize="md" />
      <Review onMoreClick={onMoreClick} />
      <Review onMoreClick={onMoreClick} />
      <Review onMoreClick={onMoreClick} />
    </S.DetailCotainer>
  );
};

const Review = ({ onMoreClick }: { onMoreClick: () => void }) => {
  return (
    <S.ReviewContainer>
      <S.ReviewHeader>
        <S.UserImage src="/src/assets/images/user.png" />
        <S.UserCenter>
          <S.UserName>{"닉넴최대여덟글자"}</S.UserName>
          <S.Date>{"2024.12.31"}</S.Date>
        </S.UserCenter>
        <S.Rating>
          <img src="/src/assets/icons/star.svg" />
          {"5.0"}점
        </S.Rating>
        <div style={{ display: "flex", alignItems: "center" }} onClick={onMoreClick}>
          <MoreIcon size="24" color={Theme.colors.Label_Alternative} />
        </div>
      </S.ReviewHeader>
      <S.ReviewContent>
        {
          "구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다"
        }
      </S.ReviewContent>
      <S.ReviewImageContainer>
        <S.ReviewImage src="/src/assets/images/place.png" />
        <S.ReviewImage src="/src/assets/images/place.png" />
      </S.ReviewImageContainer>
    </S.ReviewContainer>
  );
};
