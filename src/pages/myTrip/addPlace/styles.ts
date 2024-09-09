import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const ListContainer = styled.div<{ isSelected: boolean }>`
  overflow: auto;
  height: calc(100% - 104px);
  padding-bottom: ${({ isSelected }) => (isSelected ? "164px" : "0")};
`;

export const BottomContainer = styled.div`
  background: ${Theme.colors.Bg_Default};
  width: 100%;
  height: fit-content;
  padding-top: 8px;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 0px 16px 0px #0000000d;
  position: absolute;
  bottom: 0;
  index: 1;
`;

export const ChipRow = styled.div`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: auto;
`;

export const NoResultContainer = styled.div`
  height: calc(100% - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NoResultTitle = styled.span`
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Title_XS};
`;

export const NoResultParagraph = styled.span`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_M};
  text-align: center;
`;
