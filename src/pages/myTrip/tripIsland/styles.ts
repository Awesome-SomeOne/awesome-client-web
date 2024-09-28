import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 0 64px 0;
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

export const Credit = styled.p`
  position: absolute;
  bottom: 8px;
  font-size: 8px;
  color: ${Theme.colors.Label_Assitive};
`;

export const SpanContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Text = styled.span`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_L};
`;

export const TextButton = styled.span`
  color: #1a80e5;
  ${Theme.typo.Body_L};
  cursor: pointer;
  text-decoration: underline;
`;

export const SearchBar = styled.div`
  background: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Assitive};
  height: 48px;
  padding: 18px 8px 18px 16px;
  margin: 0 20px 8px 20px;
  ${Theme.typo.Body_L};
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 16px;
  display: flex;
  align-items: center;
`;
