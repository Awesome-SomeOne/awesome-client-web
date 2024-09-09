import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const DayContainer = styled.div``;

export const DayText = styled.p`
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 700;
`;

export const PlaceContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

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

export const ButtonContainer = styled.div`
  background: ${Theme.colors.Surface_Default};
  width: 100%;
  padding: 8px 20px;
  display: flex;
  gap: 8px;
  position: sticky;
  bottom: 0;
  z-index: 1000;
`;

export const DaysUl = styled.ul`
  padding-top: 16px;
`;

export const DayLi = styled.li<{ selected: boolean }>`
  background: ${(props) => (props.selected ? Theme.colors.Surface_Primary : Theme.colors.Surface_Default)};
  color: ${(props) => (props.selected ? Theme.colors.Label_Primary_Strong : Theme.colors.Label_Default)};
  height: 48px;
  ${Theme.typo.Body_L};
  padding: 12px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    ${Theme.typo.Label_L};
    content: "${(props) => (props.selected ? "선택" : "")}";
  }
`;

export const DayButtonContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 8px;
`;

export const DoneButton = styled.span`
  color: #1a80e5;
  ${Theme.typo.Body_L};
  cursor: pointer;
`;
