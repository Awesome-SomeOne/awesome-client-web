import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const CardListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: ${Theme.colors.Surface_Alternative};
  padding: 8px 20px 64px;
`;

export const ShowAllButton = styled.button`
  padding: 5px 16px;
  background: ${Theme.colors.Fill_Light};
  border-radius: 8px;
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Default};
  margin-top: 16px;
  width: fit-content;
`;
