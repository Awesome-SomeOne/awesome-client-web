import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { Theme } from "@/styles/theme";

export const BackDrop = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;

  background-color: ${Theme.colors.Dim_Default};
  z-index: 9;
`;

export const BottomSheetContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  max-height: 80%;
  background-color: ${Theme.colors.Fill_White};
  border-radius: 16px 16px 0 0;
  z-index: 10;
`;
