import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const ImageContainer = styled.div`
  position: relative;
  display: inline-block;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${Theme.colors.Dim_Primary_Gradient};
    pointer-events: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 2;
`;

export const Indicator = styled.span<{ isSelected: boolean }>`
  width: ${(props) => (props.isSelected ? "20px" : "8px")};
  height: 8px;
  background-color: ${(props) => (props.isSelected ? Theme.colors.Fill_Primary_Default : "#E8F2FC")};
  border-radius: 99px;
  margin: 0 5px;
  display: inline-block;
  cursor: pointer;
  z-index: 1000;
`;
