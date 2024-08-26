import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const SortBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 44px 20px 8px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
`;

export const SortButton = styled.button`
  display: flex;
  gap: 4px;
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Label_L};
`;

export const Text = styled.span`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Assitive};
`;

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 20px;
  max-height: 100%;
  overflow-y: scroll;
`;
