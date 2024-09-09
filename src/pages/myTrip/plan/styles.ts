import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const BottomSheetContainer = styled.div`
  width: 100%;
  padding-top: 16px;
`;

export const Delete = styled.div`
  height: 48px;
  display: flex;
  padding: 12px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  cursor: pointer;
`;
