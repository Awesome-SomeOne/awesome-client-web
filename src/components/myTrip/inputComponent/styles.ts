import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const InputContainer = styled.div`
  width: 100%;
  height: 74px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const TextField = styled.form`
  width: 100%;
  height: 48px;
  padding: 4px 16px;
  border: 1px solid ${Theme.colors.Border_Primary_Strong};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  border: none;
  outline: none;
  ${Theme.typo.Body_L};
`;

export const TextButton = styled.button`
  ${Theme.typo.Body_L};
  background: none;
  color: #1a80e5;
  padding: none;
  border: none;
  cursor: pointer;

  &:disabled {
    color: ${Theme.colors.Label_Disable};
  }
`;

export const Counter = styled.p`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Body_M};
  text-align: end;
`;
