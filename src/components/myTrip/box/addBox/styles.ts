import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const AddBox = styled.div`
  background-color: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Alternative};
  width: 100%;
  height: 80px;
  padding: 16px;
  margin-top: 8px;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  align-self: center;
`;
