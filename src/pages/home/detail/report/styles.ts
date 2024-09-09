import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const ListComponent = styled.div`
  width: 100%;
  padding: 12px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.span`
  flex-grow: 1;
`;

export const TextArea = styled.textarea`
  background: ${Theme.colors.Bg_Alternative};
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Assitive};
  height: 294px;
  padding: 12px 16px;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 16px;
`;

export const Count = styled.span`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Assitive};
  width: 100%;
  padding: 0 8px;
  text-align: end;
`;
