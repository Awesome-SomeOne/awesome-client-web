import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const BottomCompleteButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${Theme.colors.Bg_Default};
  width: 100%;
  padding: 8px 20px;
`;
