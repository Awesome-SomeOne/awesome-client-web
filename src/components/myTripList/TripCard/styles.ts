import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const TripCardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100%;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  background-color: ${Theme.colors.Surface_Alternative};
  padding: 16px;
`;

export const ImageAndTextContainer = styled.div`
  display: flex;
  gap: 8px;
  text-align: left;
`;

export const ImageWrapper = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TripStatusText = styled.span`
  color: ${Theme.colors.Status_Negative};
  ${Theme.typo.Label_L};
`;

export const TripLocationText = styled.span`
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Title_XS};
`;

export const TripTimeText = styled.span`
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Body_M};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
`;
