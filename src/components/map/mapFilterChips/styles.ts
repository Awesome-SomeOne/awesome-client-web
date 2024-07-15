import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const ChipWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  overflow-x: scroll;
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
  ${Theme.typo.Label_L};
`;
