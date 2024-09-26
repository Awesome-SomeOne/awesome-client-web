import { useLike, useUnlike } from "@/apis/place/place.queries";
import { useEffect, useState } from "react";
import * as S from "./styles";

const PlaceComponent = ({
  id,
  image,
  name,
  rating = "5.0",
  count = 1000,
  address,
  like: initialLike = false,
  onClick,
  onUnlike
}: {
  id: number;
  image: string;
  name: string;
  rating?: string;
  count?: number;
  address: string;
  like?: boolean;
  onClick?: () => void;
  onUnlike?: () => void;
}) => {
  const { mutateAsync: likePlace } = useLike();
  const { mutateAsync: unlikePlace } = useUnlike();

  const [like, setLike] = useState(initialLike);

  useEffect(() => {
    setLike(initialLike);
  }, [initialLike]);

  const handleLike = async (event: any) => {
    event.stopPropagation();

    try {
      if (like) {
        await unlikePlace({ businessId: id });
        onUnlike && onUnlike();
      } else {
        await likePlace({ businessId: id });
      }
      setLike((prev) => !prev);
    } catch (error) {
      console.error("좋아요 처리 중 오류 발생:", error);
    }
  };

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
      <div onClick={handleLike}>
        <S.Heart src={like ? "/icons/heart-fill.svg" : "/icons/heart.svg"} />
      </div>
    </S.ComponentBox>
  );
};

export default PlaceComponent;
