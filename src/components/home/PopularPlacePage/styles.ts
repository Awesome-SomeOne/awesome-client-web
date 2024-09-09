import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const PlaceImage = styled.div<{ src: string }>`
  flex-shrink: 0;
  width: 100%;
  min-width: 200px;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const PlaceInfo = styled.div`
  ${Theme.typo.Title_XS};
  color: ${Theme.colors.Label_Inverse};
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  left: 8px;
`;
