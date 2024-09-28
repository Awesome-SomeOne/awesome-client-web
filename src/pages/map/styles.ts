import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const MapPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const UpperBarContainer = styled.section`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 100;
`;

export const MyTripPlaceMarkerToggleButton = styled.button<{ isMyTripPlaceMarkerChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  right: 20px;
  bottom: 65px;
  height: 40px;
  padding: 4px 12px;
  border-radius: 99px;
  border: 1px solid #76b2ef80;
  background: ${({ isMyTripPlaceMarkerChecked }) =>
    isMyTripPlaceMarkerChecked ? Theme.colors.Fill_Primary_Default : Theme.colors.Fill_White};
  color: ${({ isMyTripPlaceMarkerChecked }) =>
    isMyTripPlaceMarkerChecked ? Theme.colors.Fill_White : Theme.colors.Fill_Primary_Default};
  z-index: 10;
  ${Theme.typo.Label_L}
`;
