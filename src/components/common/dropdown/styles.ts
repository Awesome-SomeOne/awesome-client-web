import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const DropdownContainer = styled.button<{ size: "sm" | "md"; color: string; props }>`
  background-color: ${Theme.colors.Bg_Default};
  color: ${(props) => props.color};
  border: none;
  height: ${(props) => (props.size === "sm" ? "36px" : "48px")};
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const DropdownText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
