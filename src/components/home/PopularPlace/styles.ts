import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const PopularPlaceLayout = styled.div`
  padding-bottom: 8px;
`;

export const PlaceBox = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const PlaceImage = styled.div<{ src: string }>`
  width: calc(100% * 200 / 360);
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
  bottom: 8px;
  left: 8px;
`;
