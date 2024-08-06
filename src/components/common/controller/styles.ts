import styled from "@emotion/styled";
import { Theme } from "../../../styles/theme";

export const OutContainer = styled.div<{ size: "sm" | "md" }>`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const InnerContainer = styled.div<{ size: "sm" | "md" }>`
  width: ${({ size }) => (size === "sm" ? "26px" : "32px")};
  height: ${({ size }) => (size === "sm" ? "26px" : "32px")};
  padding: 4px;
  display: flex;
`;

export const Label = styled.label<{ size: "sm" | "md" }>`
  ${({ size }) => (size === "sm" ? Theme.typo.Body_M : Theme.typo.Body_L)}
  color: ${Theme.colors.Label_Default};
`;

export const Input = styled.input<{ boxSize: "sm" | "md"; disabled?: boolean }>`
  appearance: none;
  width: ${({ boxSize }) => (boxSize === "sm" ? "18px" : "24px")};
  height: ${({ boxSize }) => (boxSize === "sm" ? "18px" : "24px")};
  border: 2px solid ${Theme.colors.Border_Primary_Default};
  background-color: ${({ disabled }) => (disabled ? Theme.colors.Fill_Disable : Theme.colors.Bg_Default)};
  border-radius: 2px;
  margin: 0px !important;

  &:checked {
    border-color: transparent;
    background-image: ${({ disabled }) =>
      `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill=${
        disabled ? "'lightgray'" : "'white'"
      } xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M4.35355 9.04645C4.15829 9.24171 3.84171 9.24171 3.64645 9.04645L0.699999 6.1C0.3134 5.7134 0.313401 5.0866 0.7 4.7C1.0866 4.3134 1.7134 4.3134 2.1 4.7L3.64645 6.24645C3.84171 6.44171 4.15829 6.44171 4.35355 6.24645L9.9 0.700001C10.2866 0.313402 10.9134 0.313401 11.3 0.7C11.6866 1.0866 11.6866 1.7134 11.3 2.1L4.35355 9.04645Z' transform='translate(2.5,2.5)'/%3e%3c/svg%3e");`}
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ disabled }) => (disabled ? Theme.colors.Fill_Disable : Theme.colors.Fill_Primary_Default)};
  }
`;
