import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";
import { motion } from "framer-motion";

export const Toast = styled(motion.div)`
    position: fixed;
    top: 50px;
    left: 50%;
    width: max-content;
    height: 40px;
    margin: 0 auto;
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
