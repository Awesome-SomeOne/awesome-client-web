import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100vw;
  height: 100vh;
`;

export const TopSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 100px;
  gap: 8px;
`;

export const StyledImg = styled.img`
  width: 48px;
  height: 48px;
`;

export const StyledText = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
`;

export const BottomSection = styled.section`
  display: flex;
  position: fixed;
  align-items: center;
  top: 80%;
  ${Theme.typo.Body_L};
`;

export const LeftContainer = styled.div`
  padding: 8px;
  margin-right: 10px;
`;

export const StyledButton = styled.button`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Alternative};
`;

export const RightContainer = styled.div`
  padding: 8px;
  margin-left: 10px;
`;
