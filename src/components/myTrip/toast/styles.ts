import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";
import { motion } from "framer-motion";

export const Toast = styled(motion.div)`
    position: fixed;
    top: 50px;
    left: 50%;
    width: 128px;
    height: 40px;
    ${Theme.typo.Body_L};
    background: ${Theme.colors.Fill_Primary_Lightest};
    color: ${Theme.colors.Label_Default};
    padding: 8px 16px;
    border-radius: 9999px;
    box-shadow: ${Theme.shadow.Neutral_Basic_L},
    display: flex;
    align-items: center;
    z-index: 2000;
`;
