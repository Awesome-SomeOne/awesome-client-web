import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const PopularMemoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PopularMemoryTitle = styled.span`
  z-index: 2;
  &.picture-title {
    position: absolute;
    bottom: 8px;
    left: 8px;
    color: ${Theme.colors.Label_Inverse};
    ${Theme.typo.Title_XS}
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MemoryCardWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 0px 20px;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MemoryCard = styled.button`
  position: relative;
  height: 180px;
  width: 135px;
  border-radius: 8px;
`;

export const MemoryCardImage = styled.img`
  height: 180px;
  width: 135px;
  border-radius: 8px;
  object-fit: cover;
`;
