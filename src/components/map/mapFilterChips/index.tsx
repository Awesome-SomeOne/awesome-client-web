import { useState } from "react";
import { MAP_FILTER_CHIP_LIST } from "../../../constants/mapPageConstants";
import * as S from "./styles";

const MapFilterChips = () => {
  const [chipIndex, setChipIndex] = useState<number>(0);

  return (
    <S.ChipWrapper>
      {MAP_FILTER_CHIP_LIST.map((chip, index) => {
        return (
          <div key={index}>
            <S.Chip type="radio" id={chip} radioGroup="mapChip" name="mapChip" />
            <S.ChipLabel
              htmlFor={chip}
              aria-checked={chipIndex === index}
              onClick={() => {
                setChipIndex(index);
              }}
            >
              {chip}
            </S.ChipLabel>
          </div>
        );
      })}
    </S.ChipWrapper>
  );
};

export default MapFilterChips;
