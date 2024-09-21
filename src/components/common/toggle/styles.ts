import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const OutContainer = styled.button<{ on: boolean; disable: boolean }>`
  position: relative;
  width: 51px;
  height: 30px;
  border-radius: 100px;
  background-color: ${({ on, disable }) =>
    on ? (disable ? Theme.colors.Fill_Primary_Lighter : Theme.colors.Fill_Primary_Default) : Theme.colors.Fill_Light};
`;

export const InnerCircle = styled.article<{ on: boolean; disable: boolean }>`
  position: absolute;
  top: 2px;
  ${({ on }) => (on ? "right: 2px" : "left: 2px")};
  width: 26px;
  height: 26px;
  border-radius: 100px;
  background-color: ${({ on, disable }) => (disable && !on ? Theme.colors.Fill_Disable : Theme.colors.Fill_White)};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.16);
`;
