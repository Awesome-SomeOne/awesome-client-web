import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
`;

export const SpotExplanationContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const SpotImage = styled.img<{ size: "sm" | "lg" }>`
  width: ${({ size }) => (size === "sm" ? "48px" : "64px")};
  height: ${({ size }) => (size === "sm" ? "48px" : "64px")};
  border-radius: ${({ size }) => (size === "sm" ? "4px" : "8px")};
  border: 1px solid ${Theme.colors.Border_Primary_Default};
`;

export const Text = styled.span`
  &.spot {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_L};
  }
  &.spot-description {
    color: ${Theme.colors.Label_Assitive};
    ${Theme.typo.Label_M};
  }
  &.section-description {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Label_L};
  }
`;

export const SpotTextFlexBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpotTextUpperLineFlexBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RateSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImageFlexWrapper = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 20px;
`;
