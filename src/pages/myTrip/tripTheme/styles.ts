import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0 20px;
`;
export const Box = styled.div<{ selected: boolean; bgUrl: string }>`
  ${Theme.typo.Title_XS};
  color: ${Theme.colors.Label_Inverse};
  aspect-ratio: 1;
  background: ${(props) => (props.selected ? `url(${props.bgUrl})` : Theme.colors.Dim_Default)};
  background-size: cover;
  ${(props) =>
    props.selected
      ? `border: 2px solid ${Theme.colors.Border_Primary_Strong};
      background-color: #1a80e580;
      background-blend-mode: multiply;
      `
      : `border: 1px solid ${Theme.colors.Border_Primary_Default}`};
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px #4899ea29;
  cursor: pointer;
`;
