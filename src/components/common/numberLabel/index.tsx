import * as S from "./styles";

interface INumberLabelProps {
  number?: string;
  selected?: boolean;
}

/**
 * Number Label
 * @param number 한 자리 숫자(string)
 * @param selected
 * @returns
 */
const NumberLabel = ({ number = "N", selected = false }: INumberLabelProps) => {
  return <S.LabelContainer selected={selected}>{number}</S.LabelContainer>;
};

export default NumberLabel;
