import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const NoResultContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const NoResultTitle = styled.span`
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Title_XS};
`;

export const NoResultParagraph = styled.span`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_M};
  text-align: center;
`;
