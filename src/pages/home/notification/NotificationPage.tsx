import ClearIcon from "@/assets/icons/ClearIcon";
import Chip from "@/components/common/chip/index";
import Appbar from "@/components/common/header/Appbar";
import Notification from "@/components/home/Notification/index";
import { NOTIFICATION_CHIP_LIST } from "@/constants/homePageConstants";
import { Theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import * as S from "./styles";

export type NotificationType = {
  tag: string;
  title: string;
  content: string;
};

const NotificationPage = ({ onClose }: { onClose: () => void }) => {
  const [notification, setNotification] = useState<NotificationType[]>([]);
  const [selectedChip, setSelectedChip] = useState("전체");

  useEffect(() => {
    setNotification([
      {
        tag: "내 여행",
        title: "관련 알림에 대한 타이틀 아마 25자까지였던 걸로 기억함",
        content:
          "서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다.서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다.서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다."
      },
      {
        tag: "내 여행",
        title: "관련 알림에 대한 타이틀 아마 25자까지였던 걸로 기억함",
        content:
          "서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다.서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다.서브텍스트 더 자세한 내용은 여기 적힙니다.최대 몇자가 없습니다. 그냥 푸쉬알림의 본문 내용 글자수대로 많아집니다."
      }
    ]);
  }, []);

  const handleChipClick = (chip: string) => {
    setSelectedChip(chip);
    // 칩 클릭에 따른 알림 필터링
  };

  return (
    <div
      style={{
        height: "100%",
        paddingTop: "56px",
        display: "flex",
        flexDirection: "column",
        background: Theme.colors.Bg_Alternative,
        overflow: "hidden"
      }}
    >
      <Appbar
        title="알림센터"
        textAlign="center"
        rightIcon1={
          <div onClick={onClose}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <div style={{ padding: "8px 20px", display: "flex", gap: "8px" }}>
        {NOTIFICATION_CHIP_LIST.map((chip, index) => (
          <Chip
            key={index}
            text={chip}
            hierarchy="primary"
            selected={chip === selectedChip}
            onChipClick={() => handleChipClick(chip)}
          />
        ))}
      </div>
      {notification.length ? (
        <S.NotificationLayout>
          {notification.map((notification, index) => (
            <Notification key={index} notification={notification} />
          ))}
        </S.NotificationLayout>
      ) : (
        <S.NoResultContainer>
          <S.NoResultTitle>아직 알림이 없어요!</S.NoResultTitle>
          <S.NoResultParagraph>곧 알림을 보내드릴게요 :)</S.NoResultParagraph>
        </S.NoResultContainer>
      )}
    </div>
  );
};

export default NotificationPage;
