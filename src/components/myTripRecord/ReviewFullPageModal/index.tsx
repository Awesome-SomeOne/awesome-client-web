import { Controller, useForm } from "react-hook-form";

import { usePostIslandReview } from "@/apis/businessReview/businessReview.queries";
import Button from "@/components/common/button";
import FullPageModal from "@/components/common/fullPageModal";
import StarRate from "@/components/common/starRate";
import { useStarRate } from "@/components/common/starRate/starRateContext";
import TextArea from "@/components/common/textArea";

import * as S from "./styles";

const ReviewFullPageModal = ({ close }: { close: () => void }) => {
  const { starRate } = useStarRate();
  const { mutate: postIslandReview } = usePostIslandReview();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      review: ""
    }
  });

  const onSubmit = (data: { review: string }) => {
    console.log("datatata", data);
    postIslandReview({
      request: {
        businessId: 1,
        userId: 1,
        rating: starRate,
        businessReview: data.review
      },
      images: null
    });
    close();
  };

  return (
    <FullPageModal close={close} title={"리뷰 작성"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Container>
          <S.SpotExplanationContainer>
            <S.SpotImage size="sm" src="" />
            <S.SpotTextFlexBox>
              <S.SpotTextUpperLineFlexBox>
                <S.Text className="spot">산선암</S.Text>
                <S.Text className="spot-description">관광명소</S.Text>
              </S.SpotTextUpperLineFlexBox>
              <S.Text className="spot-description">경상북도 울릉도</S.Text>
            </S.SpotTextFlexBox>
          </S.SpotExplanationContainer>

          <S.RateSection>
            <S.Text className="section-description">다녀오신 장소는 어떠셨나요?</S.Text>
            <StarRate />
          </S.RateSection>

          <Controller
            name="review"
            control={control}
            rules={{ required: true, maxLength: 500 }}
            render={({ field }) => (
              <TextArea
                label="장소 리뷰"
                placeholder="리뷰를 자세히 남겨주세요"
                maxLength={500}
                isShowLength
                control={control}
                {...field}
              />
            )}
          />

          <S.ImageSection>
            <S.Text className="section-description">사진</S.Text>
            <S.ImageFlexWrapper>
              <S.SpotImage size="lg" src="" />
              <S.SpotImage size="lg" src="" />
            </S.ImageFlexWrapper>
          </S.ImageSection>
        </S.Container>
        <S.ButtonWrapper>
          <Button disabled={starRate === -1} text="리뷰 작성하기" size="lg" type="submit" />
        </S.ButtonWrapper>
      </form>
    </FullPageModal>
  );
};

export default ReviewFullPageModal;
