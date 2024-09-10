import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const BackgroundWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${Theme.colors.Surface_Alternative};
  height: 100%;
`;

export const CardListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  padding: 8px 20px 0;
  background: ${Theme.colors.Surface_Alternative};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ShowAllButton = styled.button`
  padding: 5px 16px;
  background: ${Theme.colors.Fill_Light};
  border-radius: 8px;
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Default};
  width: fit-content;
  margin: 16px 0 64px;
`;
