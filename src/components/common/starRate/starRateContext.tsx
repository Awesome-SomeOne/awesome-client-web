import { createContext, ReactNode, useContext, useState } from "react";

const StarRateContext = createContext<{
  starRate: number;
  setStarRate: ((rate: number) => void) | null;
}>({
  starRate: -1,
  setStarRate: null
});

export const useStarRate = () => useContext(StarRateContext);

export const StarRateProvider = ({ children }: { children: ReactNode }) => {
  const [starRate, setStarRate] = useState(-1);

  return <StarRateContext.Provider value={{ starRate, setStarRate }}>{children}</StarRateContext.Provider>;
};
