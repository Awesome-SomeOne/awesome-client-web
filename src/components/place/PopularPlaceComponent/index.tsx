import * as S from "./styles";

export const PopularPlaceComponent = ({
  image,
  name,
  onClick
}: {
  image: string;
  name: string;
  onClick: () => void;
}) => {
  return (
    <S.PlaceImage src={image} onClick={onClick}>
      <S.PlaceInfo>{name}</S.PlaceInfo>
    </S.PlaceImage>
  );
};
