import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const NavContainer = styled.nav`
  width: 100%;
  padding: 0px 20px;
  /* overflow-x: scroll; */
`;

export const TabContainer = styled.li`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: 100%;
`;

export const FlexContainer = styled.ul`
  display: flex;
  /* gap: 10px; */
  width: 100%;
`;

export const Tab = styled.li`
  position: relative;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  background: white;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  user-select: none;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: nowrap;
  width: 100%;
`;

export const UnderLine = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: red;
`;
