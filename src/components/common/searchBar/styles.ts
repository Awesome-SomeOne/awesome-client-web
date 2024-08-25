import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const SearchField = styled.form<{ isFocused: boolean; isFilled: boolean }>`
  background: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Assitive};
  height: 48px;
  padding: 18px 8px;
  margin: 8px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${(props) =>
      props.isFocused
        ? Theme.colors.Border_Primary_Strong
        : props.isFilled
          ? Theme.colors.Border_Primary_Default
          : Theme.colors.Border_Default};
`;

export const SearchInput = styled.input`
  background: inherit;
  color: ${Theme.colors.Label_Default};
  padding-left: 8px;
  border: none;
  outline: none;
  ${Theme.typo.Body_L};
  flex: 1;
`;
