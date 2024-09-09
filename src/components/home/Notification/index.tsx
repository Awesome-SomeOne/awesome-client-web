import Dropdown from "@/components/common/dropdown/index";
import TextLabel from "@/components/common/textLabel/index";
import { NotificationType } from "@/pages/home/notification/NotificationPage";
import * as S from "./styles";

const Notification = ({ notification }: { notification: NotificationType }) => {
  const { tag, title, content } = notification;

  return (
    <S.NotificationContainer>
      <div style={{ width: "40px", height: "40px" }}>null</div>
      <S.NotificationBox>
        <TextLabel text={tag} />
        <S.Title>{title}</S.Title>
        <Dropdown text="자세히 보기" text2="접기" content={content} />
      </S.NotificationBox>
    </S.NotificationContainer>
  );
};

export default Notification;
