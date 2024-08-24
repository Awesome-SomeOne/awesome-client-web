import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const MyTripRecordDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${Theme.size.Header_Height};
`;

export const SpotAndDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
`;

export const Text = styled.span`
  &.spot {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_M};
  }
  &.date {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Body_M};
  }
`;

export const MenuButton = styled.button`
  width: 100%;
  padding: 12px 20px;
  background-color: ${Theme.colors.Surface_Default};
  text-align: left;
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Body_L};
`;
