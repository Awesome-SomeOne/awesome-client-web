import { StarRateProvider } from "@/components/common/starRate/starRateContext";
import useOverlay from "@/hooks/useOverlay";

import ReviewFullPageModal from "../ReviewFullPageModal";
import * as S from "./styles";

interface SpotCardProps {
  isShowReview?: boolean;
}

const SpotCard = ({ isShowReview = true }: SpotCardProps) => {
  const { isOpen, open, close } = useOverlay();

  const handleReviewEditButton = () => {
    open();
  };

  return (
    <>
      {isOpen && (
        <StarRateProvider>
          <ReviewFullPageModal close={close} />
        </StarRateProvider>
      )}

      <S.SpotCardFlexContainer>
        <S.CardWrapper>
          <S.SpotAndEditWrapper>
            <S.SpotWrapper>
              <S.ImageWrapper src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" />
              <S.ColumnFlexWrapper>
                <S.SpotTitleBox>
                  산선암
                  <S.TagText>관광명소</S.TagText>
                </S.SpotTitleBox>
                <S.DetailSpotText>울릉도 뭐시기</S.DetailSpotText>
              </S.ColumnFlexWrapper>
            </S.SpotWrapper>
            <S.ChangeReviewButton onClick={handleReviewEditButton}>리뷰편집</S.ChangeReviewButton>
          </S.SpotAndEditWrapper>

          {isShowReview && (
            <S.ReviewWrapper>
              <S.TextContainer>
                <S.StarRateWrapper>★ 5.0점</S.StarRateWrapper>
                구체적인 리뷰를 작성하는 공간최대 2줄까지 길어집니다아ㅏㅏ
              </S.TextContainer>
              <S.ImageWrapper src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg" />
            </S.ReviewWrapper>
          )}
        </S.CardWrapper>
      </S.SpotCardFlexContainer>
    </>
  );
};

export default SpotCard;
