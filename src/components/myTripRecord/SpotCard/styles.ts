import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const SpotCardFlexContainer = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  padding: 0 20px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid ${Theme.colors.Border_Default};
  box-shadow: ${Theme.shadow.Shadow_Md};
  background-color: ${Theme.colors.Surface_Alternative};
  padding: 16px;
`;

export const SpotAndEditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpotWrapper = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const ColumnFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SpotTitleBox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Body_L}
`;

export const TagText = styled.span`
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Label_M}
`;

export const DetailSpotText = styled.span`
  text-align: start;
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Label_M}
`;

export const ChangeReviewButton = styled.button`
  display: flex;
  color: ${Theme.colors.Label_Primary_Default};
  ${Theme.typo.Body_M}
`;

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${Theme.colors.Fill_Light};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  ${Theme.typo.Body_M}
`;

export const StarRateWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: flex-start;
  color: ${Theme.colors.Label_Primary_Default};
  ${Theme.typo.Label_M}
`;

export const ImageWrapper = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;
