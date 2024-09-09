import { PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import * as S from "./styles";

const Wheel = ({
  items,
  selectedItemIndex = 0,
  onChange
}: {
  items: string[];
  selectedItemIndex?: number;
  onChange?: (index: number) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState(selectedItemIndex);
  const itemHeight = 38;
  const totalHeight = itemHeight * items.length;

  useEffect(() => {
    onChange && onChange(selectedItem);
  }, [selectedItem]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const move = Math.round(Math.abs(info.offset.y) / itemHeight);
    if (info.offset.y > itemHeight / 2) {
      setSelectedItem((prev) => Math.max(prev - move, 0));
    } else if (info.offset.y < -itemHeight / 2) {
      setSelectedItem((prev) => Math.min(prev + move, items.length - 1));
    }
  };

  return (
    <S.WheelContainer>
      <S.Wheel
        drag="y"
        dragConstraints={{ top: -totalHeight + itemHeight * 2, bottom: itemHeight }}
        onDragEnd={handleDragEnd}
        animate={{
          y: -selectedItem * itemHeight + itemHeight
        }}
      >
        {items.map((item, index) => (
          <S.Item key={index} selected={index === selectedItem}>
            {item}
          </S.Item>
        ))}
      </S.Wheel>
    </S.WheelContainer>
  );
};

export default Wheel;
