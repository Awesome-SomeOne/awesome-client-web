import * as S from "./styles";

interface IDividerProps {
  type?: "shape" | "line";
  size?: "sm" | "md";
}

/**
 * Divider
 * @param type 타입(shape, line)
 * @param size 사이즈(sm, md)
 * @returns
 */

const Divider = ({ type = "shape", size = "md" }: IDividerProps) => {
  return <S.Divider type={type} size={size} />;
};

export default Divider;
