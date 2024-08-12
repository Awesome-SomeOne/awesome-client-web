import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";
import { ReactNode } from "react";

export const OutContainer = styled.div<{ size?: "string" }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 4px;
`;

export const Label = styled.label<{ children: ReactNode; disable?: boolean; error?: boolean }>`
  ${Theme.typo.Label_L}
  color: ${({ disable, error }) =>
    disable ? Theme.colors.Label_Disable : error ? Theme.colors.Status_Negative : Theme.colors.Label_Alternative}
`;

export const TextArea = styled.textarea<{ error?: boolean; hasValue?: boolean; minHeight?: string }>`
  min-height: ${({ minHeight }) => minHeight || "134px"};
  padding: 4px 16px;
  border-radius: 16px;
  border: ${({ error, hasValue }) =>
    error
      ? "1px solid " + Theme.colors.Status_Negative
      : hasValue
      ? "1px solid " + Theme.colors.Border_Primary_Default
      : "1px solid #70737c"};
  color: ${({ error }) => (error ? Theme.colors.Status_Negative : Theme.colors.Label_Default)};
  outline: none;
  ${Theme.typo.Body_L}

  :focus {
    border: 1px solid ${Theme.colors.Border_Primary_Strong};
    outline: none;
  }

  :error {
    border: 1px solid ${Theme.colors.Status_Negative};
  }
`;

export const MaxLengthText = styled.span<{ error?: boolean }>`
  padding-right: 16px;
  text-align: end;
  ${Theme.typo.Body_M}
`;
