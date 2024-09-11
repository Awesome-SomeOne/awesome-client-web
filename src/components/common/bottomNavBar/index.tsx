import { useLocation, useNavigate } from "react-router-dom";

import BottomNavCommunityIcon from "@/assets/icons/BottomNavCommunityIcon";
import BottomNavHomeIcon from "@/assets/icons/BottomNavHomeIcon";
import BottomNavMapIcon from "@/assets/icons/BottomNavMapIcon";
import BottomNavProfileIcon from "@/assets/icons/BottomNavProfileIcon";
import BottomNavTripIcon from "@/assets/icons/BottomNavTripIcon";
import { PATH } from "@/constants/path";

import * as S from "./styles";

const BottomNavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const NAV_ITEMS = [
    { path: PATH.ROOT, label: "홈", Icon: BottomNavHomeIcon },
    { path: PATH.MY_TRIP_LIST, label: "내여행", Icon: BottomNavTripIcon },
    { path: PATH.MAP, label: "지도", Icon: BottomNavMapIcon },
    { path: PATH.COMMUNITY, label: "커뮤니티", Icon: BottomNavCommunityIcon },
    { path: PATH.MY_TRIP_LIST, label: "프로필", Icon: BottomNavProfileIcon } // TODO: 프로필 페이지 경로 수정 필요
  ] as const;

  const handleNavigation = (path: string) => {
    if (location.pathname === path) return;
    navigate(path);
  };

  return (
    <S.BottomNavBarContainer>
      {NAV_ITEMS.map(({ path, label, Icon }) => (
        <S.BottomNavBarItem key={label} onClick={() => handleNavigation(path)} isSelected={location.pathname === path}>
          <Icon isSelected={location.pathname === path} />
          {label}
        </S.BottomNavBarItem>
      ))}
    </S.BottomNavBarContainer>
  );
};

export default BottomNavBar;
