import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const HomeLayout = styled.div`
  width: 100%;
  margin: auto;
  background-color: ${Theme.colors.Bg_Alternative};
`;

export const AppBar = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${Theme.colors.Bg_Default};
`;
