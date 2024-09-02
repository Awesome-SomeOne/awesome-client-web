import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const DropdownContainer = styled.button<{ size: "sm" | "md"; color: string }>`
  background-color: ${Theme.colors.Bg_Default};
  color: ${({ color }) => color};
  border: none;
  height: ${({ size }) => (size === "sm" ? "36px" : "48px")};
  padding: 8px 12px;
  margin: auto;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const DropdownText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const DropdownContent = styled.div`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Default};
`;
