/**
 * 알림 설정 페이지
 * @Author 백선우
 */

import BackIcon from "@/assets/icons/BackIcon";
import BottomNavBar from "@/components/common/bottomNavBar";
import Appbar from "@/components/common/header/Appbar";
import ToggleWithText from "@/components/myPage";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type NotificationType = "community_comm" | "my_trip_alerts" | "weather_alerts" | "schedule_alerts";

export default function NotificationSettingPage() {
  const navigate = useNavigate();

  const buttons: { type: NotificationType; text: string }[] = [
    {
      type: "community_comm",
      text: "커뮤니티 댓글 알림"
    },
    {
      type: "my_trip_alerts",
      text: "내 여행 알림"
    },
    {
      type: "weather_alerts",
      text: "날씨 알림"
    },
    {
      type: "schedule_alerts",
      text: "일정 알림"
    }
  ];

  // 유저별 알림 설정 받아오기 API 연동

  // 알림 설정 Handler
  function setNotification(type: NotificationType) {}
  return (
    <>
      <S.Root>
        <Appbar
          title="알림 설정"
          textAlign="center"
          leftIcon={
            <div onClick={() => navigate(-1)}>
              <BackIcon />
            </div>
          }
        />
        <S.Container>
          <S.ButtonContainer>
            <S.TextSection>
              <S.StyledTitle>시스템 알림</S.StyledTitle>
              <S.StyledSubTitle>설정에서 알림을 켜주세요</S.StyledSubTitle>
            </S.TextSection>
            <S.IconSection>
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.20187 17.6475C1.67189 18.1175 2.42969 18.1175 2.89971 17.6475L10.8709 9.67626C11.245 9.30216 11.245 8.69784 10.8709 8.32374L2.89971 0.352518C2.42969 -0.117506 1.67189 -0.117506 1.20187 0.352518C0.731847 0.822542 0.731847 1.58034 1.20187 2.05036L8.14671 9.0048L1.19228 15.9592C0.731847 16.4197 0.731847 17.1871 1.20187 17.6475Z"
                  fill="#1A1A1A"
                />
              </svg>
            </S.IconSection>
          </S.ButtonContainer>
          {buttons.map((button) => (
            <S.ButtonContainer>
              <ToggleWithText
                on
                disable={false}
                text={button.text}
                onPress={() => {
                  setNotification(button.type);
                }}
              />
            </S.ButtonContainer>
          ))}
        </S.Container>
      </S.Root>
      <BottomNavBar />
    </>
  );
}
