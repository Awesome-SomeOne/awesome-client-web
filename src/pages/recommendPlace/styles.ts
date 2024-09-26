import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 9px;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`;

export const ComponentCol = styled.div`
  height: 100%;
  padding: 0 20px 64px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: scroll;
`;

export const Left = styled.div`
  height: 100%;
  border-right: 1px solid ${Theme.colors.Border_Default};
`;

export const LeftComponent = styled.div<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? Theme.colors.Surface_Primary : Theme.colors.Surface_Default)};
  color: ${({ selected }) => (selected ? Theme.colors.Label_Primary_Default : Theme.colors.Label_Alternative)};
  ${Theme.typo.Title_XS};
  padding: 16px 20px;
  text-align: center;
  cursor: pointer;
`;

export const List = styled.div`
  ${Theme.typo.Body_L};
  padding: 16px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.span`
  flex-grow: 1;
`;

export const Bottom = styled.div`
  background: ${Theme.colors.Bg_Default};
  color: #1a80e5;
  ${Theme.typo.Body_L};
  width: 100%;
  padding: 8px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;
