import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const ListContainer = styled.div<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? Theme.colors.Surface_Primary : Theme.colors.Surface_Alternative)};
  color: ${Theme.colors.Label_Alternative};
  width: 100%;
  height: 80px;
  padding: 18px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const PlaceContainer = styled.div`
  width: 100%;
`;

export const PlaceImage = styled.img`
  width: 48px;
  aspect-ratio: 1;
  border-radius: 4px;
  object-fit: cover;
`;

export const UpperText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlaceName = styled.span`
  font-size: 16px;
`;

export const PlaceDesc = styled.span`
  color: ${Theme.colors.Label_Assitive};
  font-size: 12px;
  font-weight: 600;
`;
