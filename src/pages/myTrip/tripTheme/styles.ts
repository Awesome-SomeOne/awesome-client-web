import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0 20px;
`;

export const Box = styled.div<{ selected: boolean }>`
  ${Theme.typo.Title_XS};
  color: #ffffff;
  background-color: ${Theme.colors.Dim_Default};
  aspect-ratio: 1;
  border: 1px solid ${Theme.colors.Border_Primary_Default};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px #4899ea29;

  &:hover {
    border: 2px solid ${Theme.colors.Border_Primary_Strong};
    /* background: url("src/assets/images/island.png"); */
    background: ${Theme.colors.Fill_Primary_Default};
  }

  ${(props) =>
    props.selected &&
    `
  border: 2px solid ${Theme.colors.Border_Primary_Strong};
  /* background: url("src/assets/images/island.png"); */
  background: ${Theme.colors.Fill_Primary_Default};
  `}
`;
