import FullPageModal from "@/components/common/fullPageModal";
import * as S from "./styles";
import TextArea from "@/components/common/textArea";
import Button from "@/components/common/button";

const ReviewFullPageModal = ({ close }: any) => {
  return (
    <FullPageModal close={close} title={"리뷰 작성"}>
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
        </S.RateSection>

        <TextArea label="장소 리뷰" placeholder="리뷰를 자세히 남겨주세요" maxLength={500} isShowLength />

        <S.ImageSection>
          <S.Text className="section-description">사진</S.Text>
          <S.ImageFlexWrapper>
            <S.SpotImage size="lg" src="" />
            <S.SpotImage size="lg" src="" />
          </S.ImageFlexWrapper>
        </S.ImageSection>
      </S.Container>
      <S.ButtonWrapper>
        <Button
          text="리뷰 작성하기"
          size="lg"
          onClick={() => {
            close();
          }}
        />
      </S.ButtonWrapper>
    </FullPageModal>
  );
};

export default ReviewFullPageModal;
