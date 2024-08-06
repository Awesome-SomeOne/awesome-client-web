import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const ChipContainer = styled.button<{
  type: "round" | "box";
  hierarchy: "primary" | "secondary";
}>`
  background-color: ${(props) => getColor(props.hierarchy, props).bgColor};
  color: ${(props) => getColor(props.hierarchy, props).color};
  height: 36px;
  padding: 8px 12px;
  border: 1px solid ${(props) => getColor(props.hierarchy, props).borderColor};
  border-radius: ${(props) => (props.type === "round" ? "9999px" : "8px")};
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const getColor = (hierarchy: "primary" | "secondary", props) => {
  if (props.disabled) {
    return {
      bgColor: Theme.colors.Fill_Disable,
      color: Theme.colors.Label_Disable,
      borderColor: Theme.colors.Border_Default
    };
  }

  if (props.selected) {
    if (hierarchy === "primary")
      return {
        bgColor: Theme.colors.Fill_Primary_Default,
        color: Theme.colors.Label_Inverse,
        borderColor: Theme.colors.Border_Primary_Strong
      };
    else
      return {
        bgColor: Theme.colors.Fill_Primary_Lightest,
        color: Theme.colors.Label_Primary_Strong,
        borderColor: Theme.colors.Border_Primary_Strong
      };
  }

  return {
    bgColor: Theme.colors.Fill_White,
    color: Theme.colors.Label_Assitive,
    borderColor: Theme.colors.Border_Primary_Default
  };
};
