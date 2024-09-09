import * as S from "./styles";

const AppBarIcons = ({ onClick }: { onClick: (step: string) => void }) => {
  return (
    <S.AppBarLayout>
      <S.AppBarIcon src="/src/assets/icons/search.svg" onClick={() => onClick("search")} />
      <S.AppBarIcon src="/src/assets/icons/like.svg" onClick={() => onClick("like")} />
      <S.AppBarIcon src="/src/assets/icons/notification.svg" onClick={() => onClick("notification")} />
    </S.AppBarLayout>
  );
};

export default AppBarIcons;
