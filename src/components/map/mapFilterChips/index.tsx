import { useState } from "react";
import { MAP_FILTER_CHIP_LIST } from "../../../constants/mapPageConstants";
import * as S from "./styles";

const MapFilterChips = () => {
  const [chipIndex, setChipIndex] = useState<number>(0);
  console.log(chipIndex);
  return (
    <S.ChipWrapper>
      {MAP_FILTER_CHIP_LIST.map((chip, index) => {
        return (
          <div key={index} style={{ height: "50px" }}>
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
