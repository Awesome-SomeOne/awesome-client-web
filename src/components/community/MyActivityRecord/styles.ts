import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const MyActivityRecordWrapper = styled.section`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 16px 20px;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: ${Theme.colors.Fill_Light};
  padding: 8px;
  text-align: center;
`;

export const ButtonText = styled.p`
  color: ${Theme.colors.Label_Strong};
  &.title {
    ${Theme.typo.Body_S}
  }
  &.number {
    ${Theme.typo.Title_XS}
  }
`;
