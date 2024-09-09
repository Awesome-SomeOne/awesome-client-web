import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const ShipLayout = styled.div`
  padding: 16px 20px 64px 20px;
`;

export const Box = styled.div`
  width: 100%;
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${Theme.colors.Bg_Default};
  box-shadow: ${Theme.shadow.Shadow_Md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ShipParagraph = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
  text-align: center;
`;
