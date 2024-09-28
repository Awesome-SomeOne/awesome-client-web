import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const TripLayout = styled.div`
  padding: 0 20px;
`;

export const GradientBorder = styled.div`
  padding: 1px;
  background: linear-gradient(90deg, #1a80e5 0%, #e2ff2e 47.72%, #1a80e5 100%);
  border-radius: 8px;
`;

export const Box = styled.div`
  background-color: ${Theme.colors.Surface_Default};
  width: 100%;
  padding: 16px;
  margin: auto;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  ${Theme.typo.Title_XS};
  color: ${Theme.colors.Label_Primary_Default};
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Image = styled.img`
  width: 24px;
  aspect-ratio: 1;
  border-radius: 4px;
`;

export const Address = styled.span`
  ${Theme.typo.Label_L};
`;
