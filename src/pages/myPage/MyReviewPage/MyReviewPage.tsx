/**
 * 내가 쓴 후기 페이지
 * @Author 백선우
 */

import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import { useNavigate } from "react-router-dom";
import Image from "../../../assets/images/island.png";
import User from "../../../assets/images/user.png";
import * as S from "./styles";
import Star from "../../../assets/icons/star.svg";

export default function MyReviewPage() {
  const data = [
    {
      island: {
        image: Image,
        name: "산선암",
        category: "관광명소",
        address: "경상북도ㆍ울릉도"
      },
      user: {
        profile_image: User,
        nickname: "닉넴최대여덟글자"
      },
      date: "2024.12.31",
      rating: 5.0,
      detailReview:
        "구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다"
    },
    {
      island: {
        image: Image,
        name: "산선암",
        category: "관광명소",
        address: "경상북도ㆍ울릉도"
      },
      user: {
        profile_image: User,
        nickname: "닉넴최대여덟글자"
      },
      date: "2024.12.31",
      rating: 5.0,
      detailReview:
        "구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다"
    },
    {
      island: {
        image: Image,
        name: "산선암",
        category: "관광명소",
        address: "경상북도ㆍ울릉도"
      },
      user: {
        profile_image: User,
        nickname: "닉넴최대여덟글자"
      },
      date: "2024.12.31",
      rating: 5.0,
      detailReview:
        "구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다구체적인 리뷰를 작성하는 공간 여기는 계속 길어집니다"
    }
  ];
  const navigate = useNavigate();
  return (
    <S.Root>
      <Appbar
        title="내가 쓴 후기"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
      <S.OuterContainer>
        {data.map((data, key) => (
          <S.InnerContainer key={key}>
            <S.AreaSection>
              <S.StyledImage src={data.island.image} />
              <S.TextSection>
                <S.TopSection>
                  <S.Name>{data.island.name}</S.Name>
                  <S.Category>{data.island.category}</S.Category>
                </S.TopSection>
                <S.BottomSection>
                  <S.Address>{data.island.address}</S.Address>
                </S.BottomSection>
              </S.TextSection>
            </S.AreaSection>
            <S.ReviewSection>
              <S.UserSection>
                <S.StyledProfileImage src={data.user.profile_image} />
                <S.InfoSection>
                  <S.Nickname>{data.user.nickname}</S.Nickname>
                  <S.Date>{data.date}</S.Date>
                </S.InfoSection>
                <S.RatingSection>
                  <S.Star src={Star} />
                  <S.Rating>{Number(++data.rating).toFixed(1)}점</S.Rating>
                </S.RatingSection>
              </S.UserSection>
              <S.Review>{data.detailReview}</S.Review>
              <S.ImageSection>
                <S.Image />
                <S.Image />
                <S.Image />
                <S.Image />
                <S.Image />
              </S.ImageSection>
            </S.ReviewSection>
          </S.InnerContainer>
        ))}
      </S.OuterContainer>
    </S.Root>
  );
}
