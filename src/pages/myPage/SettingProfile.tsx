/**
 * 프로필 수정
 * @Author 백선우
 */

import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import { useNavigate } from "react-router-dom";

export default function SettingProfile() {
  const navigate = useNavigate();
  return (
    <>
      <Appbar
        title="프로필 수정"
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
