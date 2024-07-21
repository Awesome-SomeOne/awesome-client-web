import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const ChipWrapper = styled.div`
  position: absolute;
  top: 50px; // TODO: 디자인에 따라 변경 필요
  left: 0;
  display: flex;
  padding: 8px;
  gap: 8px;
  width: 100vw;
  overflow-x: scroll;
  z-index: 2;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled.input`
  display: none;

  :checked + label {
    background-color: ${Theme.colors.Fill_Primary_Default};
    color: ${Theme.colors.Label_Inverse};
  }
`;

export const ChipLabel = styled.label`
  background-color: ${Theme.colors.Fill_White};
  color: ${Theme.colors.Label_Assitive};
  border: 1px solid ${Theme.colors.Border_Primary_Default};
  border-radius: 9999px;
  padding: 8px 12px 8px 12px;
  transition: all 0.2s;
  white-space: nowrap;
  ${Theme.typo.Label_L};
`;
