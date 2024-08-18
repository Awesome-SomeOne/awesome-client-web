import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const LabelContainer = styled.div<{ labelColor: string; selected: boolean }>`
  width: 20px;
  height: 20px;
  background-color: ${(props) =>
    props.selected
      ? Theme.colors.Fill_Primary_Default
      : props.labelColor
        ? props.labelColor
        : Theme.colors.Label_Assitive};
  border-radius: 99px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
