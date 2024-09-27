import * as S from "./styles";
import Divider from "@/components/common/divider";

interface DetailTravelMemoriesProps {
  oneLineReview: string;
  overallReview: string;
  imageUrl: string[];
}
const DetailTravelMemories = ({ oneLineReview, overallReview, imageUrl }: DetailTravelMemoriesProps) => {
  return (
    <S.SectionWrapper>
      <S.TextWrapper>
        <S.Text className="title">{oneLineReview}</S.Text>
        <Divider type="line" />
        <S.Text className="content">{overallReview} </S.Text>
      </S.TextWrapper>
      <S.ImageFlexWrapper>{imageUrl?.map((url) => <S.Image src={url} />)}</S.ImageFlexWrapper>
      좋아요 버튼
    </S.SectionWrapper>
  );
};

export default DetailTravelMemories;
