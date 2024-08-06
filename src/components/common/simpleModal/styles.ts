import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";
import { motion } from "framer-motion";

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;

  background-color: transparent;
  z-index: 9;
`;

export const SimpleModalContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 312px;
  height: fit-content;
  padding: 24px;
  background-color: ${Theme.colors.Fill_White};
  box-shadow: ${Theme.shadow.Neutral_Basic_L};
  border-radius: 16px;
  z-index: 10;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ImageWrapper = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
`;

export const Text = styled.div`
  &.title {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_S}
  }
  &.content {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_L}
  }
  &.extraContent {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Body_S}
  }
`;

export const ButtonWrapper = styled.div<{ is_vertical?: boolean }>`
  display: flex;
  gap: 8px;
  flex-direction: ${({ is_vertical }) => (is_vertical ? "column" : "row")};
`;

export const TextButton = styled.button`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_L}
`;
