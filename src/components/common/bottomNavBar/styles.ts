import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const BottomNavBarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  background-color: ${Theme.colors.Surface_Default};
  border-radius: 8px 8px 0 0;
  z-index: 10;
`;

export const BottomNavBarItem = styled.button<{ isSelected: boolean }>`
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  padding: 0 8px;
  color: ${({ isSelected }) => (isSelected ? Theme.colors.Label_Primary_Default : Theme.colors.Label_Assitive)};
  ${Theme.typo.Label_M}
  background-color: ${({ isSelected }) => (isSelected ? Theme.colors.Fill_Primary_Lightest : "white")};
  white-space: nowrap;
`;
