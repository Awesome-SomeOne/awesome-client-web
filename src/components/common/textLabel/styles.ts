import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const TextLabelContainer = styled.div<{
  size: "sm" | "lg";
  color: "success" | "primary" | "neutral";
  fill: boolean;
}>`
  height: ${(props) => (props.size === "sm" ? "24px" : "30px")};
  padding: ${(props) => (props.fill ? (props.size === "sm" ? "4px 8px" : "6px 16px") : "6px 0")};
  border-radius: 9999px;
  background-color: ${(props) => (props.fill ? getBgColor(props.color) : "none")};
  color: ${(props) => getColor(props.color, props.fill)};
  font-size: ${(props) => (props.size === "sm" ? "12px" : "14px")};
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 2px;
`;

const getBgColor = (color) => {
  switch (color) {
    case "success":
      return "#CAFCE8";
    case "primary":
      return Theme.colors.Fill_Primary_Lightest;
    case "neutral":
      return Theme.colors.Fill_Light;
  }
};

const getColor = (color, fill) => {
  switch (color) {
    case "success":
      return Theme.colors.Status_Success;
    case "primary":
      return Theme.colors.Label_Primary_Default;
    case "neutral":
      return fill ? Theme.colors.Label_Default : Theme.colors.Label_Assitive;
  }
};
