import * as S from "./styles";

const PlaceComponent = ({
  image,
  name,
  rating,
  count = 1000,
  address,
  like = false,
  onClick
}: {
  image: string;
  name: string;
  rating: string;
  count: number;
  address: string;
  like?: boolean;
  onClick?: () => void;
}) => {
  return (
    <S.ComponentBox onClick={onClick}>
      <S.Image src={image} />
      <S.InfoBox>
        <S.TopSection>
          <S.Name>{name}</S.Name>
          <S.Rating>
            <img src="/icons/star.svg" alt="" />
            {`${rating}점(${count > 999 ? "999+" : count})`}
          </S.Rating>
        </S.TopSection>
        <S.Address>
          <img src="/icons/location_small.svg" />
          {address}
        </S.Address>
      </S.InfoBox>
      {like ? <S.Heart src="/icons/heart-fill.svg" /> : <S.Heart src="/icons/heart.svg" />}
    </S.ComponentBox>
  );
};

export default PlaceComponent;
