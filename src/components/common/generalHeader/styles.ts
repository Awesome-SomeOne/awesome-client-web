import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const GeneralHeaderContainer = styled.div<{ spacingSize: "sm" | "md" }>`
  padding: ${(props) => (props.spacingSize === "sm" ? "8px" : "12px")} 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span<{ titleSize: "xs" | "sm" | "md" | "lg" }>`
  color: ${Theme.colors.Label_Default};
  font-size: ${(props) => {
    switch (props.titleSize) {
      case "xs":
        return "16px";
      case "sm":
        return "18px";
      case "md":
        return "20px";
      case "lg":
      default:
        return "24px";
    }
  }};
  font-weight: 700;
  line-height: ${(props) => {
    switch (props.titleSize) {
      case "xs":
        return "24px";
      case "sm":
        return "26px";
      case "md":
        return "30px";
      case "lg":
      default:
        return "32px";
    }
  }};
`;

export const Sub = styled.span`
  color: ${Theme.colors.Label_Alternative};
  font-size: 14px;
`;

export const Description = styled.p<{ titleSize: "xs" | "sm" | "md" | "lg" }>`
  color: ${Theme.colors.Label_Alternative};
  font-size: ${(props) => (props.titleSize === "xs" ? "14px" : "16px")};
`;
