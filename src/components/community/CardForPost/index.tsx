import HeartIconSrc from "../../../assets/icons/HeartIcon.svg";
import SaveIconSrc from "../../../assets/icons/SaveIcon.svg";
import SpeechBubbleIconSrc from "../../../assets/icons/SpeechBubble.svg";
import * as S from "./styles";

interface CardForPostProps {
  title: string;
  content: string;
  imageUrl: string;
  tag: string;
  likeCount: number;
  commentCount: number;
  saveCount: number;
}
const CardForPost = ({ title, content, imageUrl, tag, likeCount, commentCount, saveCount }: CardForPostProps) => {
  return (
    <S.CardWrapper>
      <S.CardHeader>
        <S.UserInfo>
          <figure>
            <S.UserProfileImage
              src="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
              alt="aa"
            />
          </figure>
          <S.Text className="nickname">닉네임을최대8자</S.Text>
          <S.Text className="status">· 제주도</S.Text>
        </S.UserInfo>
        <S.Text className="time">24분 전</S.Text>
      </S.CardHeader>

      <S.Divider />

      <S.CardContent>
        <S.CardContentLeft>
          <S.Text className="content-title">{title}</S.Text>
          <S.Text className="content-description">{content}</S.Text>
        </S.CardContentLeft>
        <figure>
          <S.CardContentRight src={imageUrl} alt="카드의 대표" />
        </figure>
      </S.CardContent>

      <S.CardFooter>
        <S.Tag>#나눔</S.Tag>
        <S.CardDataWrapper>
          <S.IconWrapper>
            <img src={HeartIconSrc} alt="하트" width="16" height="16" />
            <S.Text className="like-count">{likeCount}</S.Text>
          </S.IconWrapper>
          <S.IconWrapper>
            <img src={SpeechBubbleIconSrc} alt="댓글" width="16" height="16" />
            <S.Text className="comment-count">{commentCount}</S.Text>
          </S.IconWrapper>
          <S.IconWrapper>
            <img src={SaveIconSrc} alt="저장" width="16" height="16" />
            <S.Text className="save-count">{saveCount}</S.Text>
          </S.IconWrapper>
        </S.CardDataWrapper>
      </S.CardFooter>
    </S.CardWrapper>
  );
};

export default CardForPost;
