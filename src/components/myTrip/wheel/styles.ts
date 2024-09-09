import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const WheelContainer = styled(motion.div)`
  overflow: hidden;
  flex: 1;
`;

export const Wheel = styled(motion.div)`
  height: 116px;
`;

export const Item = styled(motion.div)<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? Theme.colors.Fill_Primary_Lightest : "none")};
  color: ${({ selected }) => (selected ? Theme.colors.Label_Default : Theme.colors.Label_Disable)};
  ${({ selected }) => (selected ? Theme.typo.Headline_S : Theme.typo.Title_M)};
  padding: 4px 16px;
  border-radius: 8px;
  text-align: center;
`;
