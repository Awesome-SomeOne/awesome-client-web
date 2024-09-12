import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const NotificationBox = styled.div`
  background: ${Theme.colors.Bg_Default};
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  ${Theme.typo.Label_L};
  color: ${Theme.colors.Label_Default};
`;
