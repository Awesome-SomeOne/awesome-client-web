import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const RadioContainer = styled.label`
  height: 28px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const RadioButton = styled.input`
  appearance: none;
  border: 2px solid ${Theme.colors.Border_Primary_Default};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 4px;

  :checked {
    border: 5px solid ${Theme.colors.Border_Primary_Strong};
    :disabled {
      border: 5px solid ${Theme.colors.Label_Disable};
    }
  }

  :disabled {
    border: 2px solid ${Theme.colors.Label_Disable};
  }
`;

export const RadioText = styled.span`
  color: ${Theme.colors.Label_Default};
  font-size: 14px;
  line-height: 22px;
`;
