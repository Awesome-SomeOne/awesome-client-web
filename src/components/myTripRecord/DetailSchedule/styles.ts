import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const DayContainer = styled.section`
  padding-bottom: 24px;
`;

export const DateWrapper = styled.title`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 9px 20px;
`;

export const Text = styled.span`
  &.day-index {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_XS}
  }
  &.date {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_M}
  }
`;
