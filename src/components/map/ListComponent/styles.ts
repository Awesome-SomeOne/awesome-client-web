import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.colors.Border_Default};
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const TitleFlexWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 8px;
  &.center {
    align-items: center;
  }
`;

export const Text = styled.span`
  &.title {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_XS};
  }
  &.subTitle {
    color: ${Theme.colors.Label_Assitive};
    ${Theme.typo.Body_S};
  }
  &.status {
    color: ${Theme.colors.Status_Success};
    ${Theme.typo.Body_S};
  }
  &.rate {
    color: ${Theme.colors.Label_Primary_Default};
    ${Theme.typo.Body_S};
  }
`;

export const SmallBar = styled.div`
  height: 8px;
  border: 1px solid ${Theme.colors.Border_Strong};
`;

export const RateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  gap: 4px;
  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
`;
