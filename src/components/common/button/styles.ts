import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const ButtonContainer = styled.button<{ size: "sm" | "lg"; tertiary: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: ${(props) => (props.size === "lg" ? "12px 16px 12px 16px" : "6px 16px 6px 16px")};
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${(props) => (props.tertiary ? Theme.colors.Fill_Light : Theme.colors.Fill_Primary_Default)};
  color: ${(props) => (props.tertiary ? Theme.colors.Label_Default : Theme.colors.Label_Inverse)};
  cursor: pointer;
  transition: all 0.2s;
  ${(props) => (props.size === "lg" ? Theme.typo.Title_XS : Theme.typo.Body_M)}

  :hover {
    background-color: ${(props) => (props.tertiary ? Theme.colors.Fill_Lightest : Theme.colors.Fill_Primary_Light)};
  }

  :active {
    background-color: ${(props) => (props.tertiary ? Theme.colors.Fill_Default : Theme.colors.Fill_Primary_Dark)};
  }

  :disabled {
    background-color: ${Theme.colors.Fill_Disable};
    color: ${Theme.colors.Label_Disable};
    cursor: not-allowed;
  }
`;
