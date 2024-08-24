import styled from "@emotion/styled";

import { Theme } from "../../../styles/theme";

export const OutContainer = styled.div`
  display: flex;
  width: 100vw;
  height: ${Theme.size.Header_Height};
  z-index: 9999;
  position: fixed;
  top: 0;
  justify-content: space-between;
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
  flex: 1;
  justify-content: ${({ align }) => (align === "left" ? "left" : "center")};
  align-items: center;
  ${Theme.typo.Title_L};
  color: ${Theme.colors.Label_Default};
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 36px;
  height: 36px;
`;
