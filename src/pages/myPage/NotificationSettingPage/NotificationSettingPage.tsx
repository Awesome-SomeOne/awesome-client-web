/**
 * 알림 설정 페이지
 * @Author 백선우
 */

import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import { useNavigate } from "react-router-dom";

export default function NotificationSettingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Appbar
        title="알림 설정"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
    </>
  );
}
