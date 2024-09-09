import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

export const TitleText = styled.span`
  &.title {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_S}
  }
`;

export const TextButton = styled.button`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_M}
`;
