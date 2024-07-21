import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const LineButtonContainer = styled.button<{ size: "sm" | "lg"; primarystyle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: ${(props) => (props.size === "lg" ? "12px 16px 12px 16px" : "4px 16px 4px 16px")};
  outline: none;
  border-radius: 8px;
  background-color: ${Theme.colors.Fill_White};
  color: ${(props) => (props.primarystyle ? Theme.colors.Label_Primary_Default : Theme.colors.Label_Default)};
  border: 1px solid ${(props) => (props.primarystyle ? Theme.colors.Border_Primary_Strong : Theme.colors.Border_Strong)};
  cursor: pointer;
  transition: all 0.2s;
  ${(props) => (props.size === "lg" ? Theme.typo.Title_XS : Theme.typo.Body_M)}

  :hover {
    background-color: ${(props) => (props.primarystyle ? Theme.colors.Fill_Primary_Lightest : Theme.colors.Fill_White)};
    color: ${(props) => (props.primarystyle ? Theme.colors.Border_Primary_Strong : Theme.colors.Label_Assitive)};
  }

  :active {
    background-color: ${(props) => (props.primarystyle ? Theme.colors.Border_Primary_Strong : Theme.colors.Fill_Light)};
  }

  :disabled {
    background-color: ${Theme.colors.Border_Default};
    color: ${Theme.colors.Label_Disable};
    cursor: not-allowed;
  }
`;
