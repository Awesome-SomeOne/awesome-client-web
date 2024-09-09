import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 0 0 64px 0;
  margin: 0 20px;
`;

export const Box = styled.div<{ selected: boolean }>`
  ${Theme.typo.Title_XS};
  color: #ffffff;
  background-color: ${Theme.colors.Dim_Default};
  aspect-ratio: 1;
  border: 1px solid ${Theme.colors.Border_Primary_Default};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px #4899ea29;

  &:hover {
    border: 2px solid ${Theme.colors.Border_Primary_Strong};
    /* background: url("src/assets/images/island.png"); */
    background: ${Theme.colors.Fill_Primary_Default};
  }

  ${(props) =>
    props.selected &&
    `
  border: 2px solid ${Theme.colors.Border_Primary_Strong};
  /* background: url("src/assets/images/island.png"); */
  background: ${Theme.colors.Fill_Primary_Default};
  `}
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 74px;
  padding: 0 20px;
  margin-top: 20px;
`;

export const TextField = styled.form`
  width: 100%;
  height: 48px;
  padding: 4px 16px;
  border: 1px solid ${Theme.colors.Border_Primary_Strong};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  border: none;
  outline: none;
  ${Theme.typo.Body_L};
`;

export const TextButton = styled.button`
  ${Theme.typo.Body_L};
  background: none;
  color: #1a80e5;
  padding: none;
  border: none;
  cursor: pointer;

  &:disabled {
    color: ${Theme.colors.Label_Disable};
  }
`;

export const Counter = styled.p`
  width: 100%;
  height: 100%;
  padding: 0 8px;
  color: ${Theme.colors.Label_Assitive};
  ${Theme.typo.Body_M};
  text-align: end;
`;
