import * as S from "./styles";

interface ITabAnatomyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> {
  tabs: string[];
  selectedTab: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * TabAnatomy
 * @param tabs 탭 배열
 * @param selectedTab 현재 선택된 탭
 * @param onClick 탭 클릭 시 실행되는 함수
 * @returns
 */

const TabAnatomy = ({ tabs, selectedTab, onClick }: ITabAnatomyProps) => {
  return (
    <S.TabAnatomyContainer>
      <S.TabAnatomy>
        {tabs?.map((tab) => (
          <S.Tab key={tab} selected={selectedTab === tab} onClick={onClick}>
            {tab}
          </S.Tab>
        ))}
      </S.TabAnatomy>
    </S.TabAnatomyContainer>
  );
};

export default TabAnatomy;
