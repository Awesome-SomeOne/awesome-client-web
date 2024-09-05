import styled from "@emotion/styled";

import SearchIcon from "@/assets/icons/SearchIcon";
import Appbar from "@/components/common/header/Appbar";
import MyActivityRecord from "@/components/community/MyActivityRecord";
import PopularMemory from "@/components/community/PopularMemory";
import { Theme } from "@/styles/theme";

import * as S from "./styles";

const CommunityPage = () => {
  return (
    <>
      <Appbar
        title="커뮤니티"
        textAlign="center"
        rightIcon1={
          <button onClick={() => {}}>
            <SearchIcon />
          </button>
        }
      />
      <CommunityPageWrapper>
        <MyActivityRecord />
        <S.TitleWrapper>
          <S.TitleText className="title">인기 여행 추억</S.TitleText>
          <S.TextButton>전체보기</S.TextButton>
        </S.TitleWrapper>
        <PopularMemory />

        <S.TitleWrapper>
          <S.TitleText className="title">게시글</S.TitleText>
          <S.TextButton>전체보기</S.TextButton>
        </S.TitleWrapper>
      </CommunityPageWrapper>
    </>
  );
};

export default CommunityPage;

const CommunityPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${Theme.size.Header_Height} 0 0;
`;
