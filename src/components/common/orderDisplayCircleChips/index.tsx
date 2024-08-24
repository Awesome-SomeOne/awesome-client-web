import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

interface OrderDisplayCircleChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  totalNumber: number;
  currentNumber: number;
}

const OrderDisplayCircleChips = ({ totalNumber, currentNumber, style }: OrderDisplayCircleChipsProps) => {
  return (
    <ChipsContainer style={style}>
      {[...Array(totalNumber)].map((_, index) => (
        <CircleChip key={index} active={index + 1 === currentNumber}>
          {index + 1}
        </CircleChip>
      ))}
    </ChipsContainer>
  );
};

export default OrderDisplayCircleChips;

const ChipsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 53px;

  > *:not(:first-child) {
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -47px;
      width: 39px;
      border: 1px dashed ${Theme.colors.Border_Primary_Default};
    }
  }
`;

const CircleChip = styled.span<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? Theme.colors.Fill_Primary_Default : Theme.colors.Label_Assitive)};
  color: ${Theme.colors.Label_Inverse};
  text-align: center;
  ${Theme.typo.Label_L};
`;
