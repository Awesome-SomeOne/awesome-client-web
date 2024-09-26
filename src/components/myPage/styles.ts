import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledText = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
`;
