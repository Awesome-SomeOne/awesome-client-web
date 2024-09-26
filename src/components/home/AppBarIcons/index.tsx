import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const AppBarIcons = () => {
  const navigate = useNavigate();

  return (
    <S.AppBarLayout>
      <S.AppBarIcon src="/icons/search.svg" onClick={() => navigate(PATH.SEARCH)} />
      <S.AppBarIcon src="/icons/like.svg" onClick={() => navigate(PATH.LIKE)} />
      {/* <S.AppBarIcon src="/icons/notification.svg" onClick={() => navigate(PATH.NOTIFICATION)} /> */}
    </S.AppBarLayout>
  );
};

export default AppBarIcons;
