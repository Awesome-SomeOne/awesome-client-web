import styled from "@emotion/styled";

import StarIcon from "@/assets/icons/StarIcon";
// import { useState } from "react";
import { useStarRate } from "./starRateContext";

const StarRate = () => {
  const { starRate, setStarRate } = useStarRate();

  return (
    <StarIconWrapper>
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          onClick={() => {
            setStarRate(index + 1);
          }}
        >
          <StarIcon key={index} fill={starRate !== -1 && index + 1 <= starRate} />
        </button>
      ))}
    </StarIconWrapper>
  );
};

export default StarRate;

const StarIconWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
