import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const EmptyBox = styled.div`
  background: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_M};
  width: 100%;
  height: 54px;
  margin: 8px 0;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  display: flex;
  align-items: center;
  justify-content: center;
`;
