import GeneralHeader from "@/components/common/generalHeader/index";
import * as S from "./styles";

const PopularPlace = ({ onClick }: { onClick: (step: string) => void }) => {
  return (
    <S.PopularPlaceLayout>
      <GeneralHeader
        title="인기 관광지 둘러보기"
        sub="전체보기"
        titleSize="sm"
        spacingSize="md"
        subOnClick={() => onClick("popularPlace")}
      />
      <S.PlaceBox>
        <Place
          image="src/assets/images/popular1.png"
          ranking={1}
          name="제주도 동문시장"
          onClick={() => onClick("detail")}
        />
        <Place
          image="src/assets/images/popular2.png"
          ranking={2}
          name="울릉도 현포 남방파제"
          onClick={() => onClick("detail")}
        />
        <Place
          image="src/assets/images/popular2.png"
          ranking={3}
          name="울릉도 현포 남방파제"
          onClick={() => onClick("detail")}
        />
      </S.PlaceBox>
    </S.PopularPlaceLayout>
  );
};

const Place = ({
  image,
  ranking,
  name,
  onClick
}: {
  image: string;
  ranking: number;
  name: string;
  onClick: () => void;
}) => {
  return (
    <S.PlaceImage src={image} onClick={onClick}>
      <S.PlaceInfo>
        <span>{ranking}위</span>
        <span>{name}</span>
      </S.PlaceInfo>
    </S.PlaceImage>
  );
};

export default PopularPlace;
