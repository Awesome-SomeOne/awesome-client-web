import styled from "@emotion/styled";

import { Theme } from "../../../styles/theme";

export const Divider = styled.div<{ type: "shape" | "line"; size: "sm" | "md" }>`
  background-color: ${Theme.colors.Surface_Divider};
  width: 100%;
  height: ${(props) => {
    return props.type === "shape" ? (props.size === "sm" ? "4px" : "8px") : "1px";
  }};
`;
