import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const OutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 56px;
  z-index: 9999;
  position: fixed;
  top: 0;
  background-color: ${Theme.colors.Bg_Default};
  padding: 8px;
`;
export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;
export const CenterContainer = styled.div<{ align: "left" | "center" }>`
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "left" : "center")};
  align-items: center;
  width: 90%;
  ${Theme.typo.Title_L};
  color: ${Theme.colors.Label_Default};
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 124px;
`;
