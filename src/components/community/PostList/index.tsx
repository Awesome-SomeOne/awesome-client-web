import { useState } from "react";

import TabAnatomy from "@/components/common/tabAnatomy";

import CardForPost from "../CardForPost";
import * as S from "./styles";

const PostList = () => {
  const TABS = ["전체", "봉사", "나눔", "추천", "모임", "기타"];
  const [selectedTab, setSelectedTab] = useState<string>("전체");
  return (
    <S.BackgroundWrapper>
      <TabAnatomy
        tabs={TABS}
        selectedTab={selectedTab}
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          const tabName = event.currentTarget.textContent;
          if (tabName) {
            setSelectedTab(tabName);
          }
        }}
        style={{ background: "white", width: "100%" }}
      />
      <S.CardListWrapper>
        <CardForPost
          title="제목"
          content="본문내용은 최대 1줄까지 작성이 들어 갑니다"
          imageUrl="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
          tag="나눔"
          likeCount={1}
          commentCount={1}
          saveCount={1}
        />
        <CardForPost
          title="제목"
          content="본문내용은 최대 1줄까지 작성이 들어 갑니다"
          imageUrl="https://i.pinimg.com/564x/08/6d/00/086d0076f18503c3339ee3f7ad9c11cd.jpg"
          tag="나눔"
          likeCount={1}
          commentCount={1}
          saveCount={1}
        />
      </S.CardListWrapper>
      <S.ShowAllButton>전체 보기</S.ShowAllButton>
    </S.BackgroundWrapper>
  );
};

export default PostList;
