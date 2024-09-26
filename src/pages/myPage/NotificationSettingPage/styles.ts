import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 56px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
`;

export const TextSection = styled.section`
  gap: 2px;
`;

export const StyledTitle = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
`;

export const StyledSubTitle = styled.p`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Alternative};
`;

export const IconSection = styled.section`
  width: 24px;
  height: 24px;
  text-align: center;
`;
