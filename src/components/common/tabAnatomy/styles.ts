import styled from "@emotion/styled";

import { Theme } from "../../../styles/theme";

export const TabAnatomyContainer = styled.div`
  width: auto;
  height: 42px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
`;

export const TabAnatomy = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.span<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? Theme.colors.Label_Default : Theme.colors.Label_Assitive)};
  width: 100%;
  height: 42px;
  padding: 8px 16px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => `2px solid ${props.selected ? Theme.colors.Border_Primary_Strong : "transparent"}`};
  cursor: pointer;
`;
