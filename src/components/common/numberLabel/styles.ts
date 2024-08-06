import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const LabelContainer = styled.div<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) => (props.selected ? Theme.colors.Fill_Primary_Default : Theme.colors.Label_Assitive)};
  color: ${Theme.colors.Label_Inverse};
  border-radius: 99px;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
