import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const PlaceBox = styled.div`
  background-color: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Alternative};
  width: 100%;
  height: 80px;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  display: flex;
  align-items: center;
  gap: 13px;
  align-self: center;
`;

export const PlaceImage = styled.img<{ src: string }>`
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

export const IconContainer = styled.div<{ bgUrl: string }>`
  width: 24px;
  min-height: 32px;
  background-image: url(${({ bgUrl }) => bgUrl});
`;

export const NumberCircle = styled.div`
  background: white;
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  ${Theme.typo.Label_L};
  text-align: center;
  margin: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
