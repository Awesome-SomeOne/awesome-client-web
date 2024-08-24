import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

interface ChipContainerProps {
  shape: "round" | "box";
  hierarchy: "primary" | "secondary";
  disabled?: boolean;
  selected?: boolean;
}

export const ChipContainer = styled.button<ChipContainerProps>`
  background-color: ${(props) => getColor(props).bgColor};
  color: ${(props) => getColor(props).color};
  height: 36px;
  width: min-content;
  padding: 8px 12px;
  border: 1px solid ${(props) => getColor(props).borderColor};
  border-radius: ${({ shape }) => (shape === "round" ? "9999px" : "8px")};
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Icon = styled.div``;

export const getColor = ({ hierarchy, disabled, selected }: Omit<ChipContainerProps, "shape">) => {
  if (disabled) {
    return {
      bgColor: Theme.colors.Fill_Disable,
      color: Theme.colors.Label_Disable,
      borderColor: Theme.colors.Border_Default
    };
  }

  if (selected) {
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
