import { subYears, addYears } from "date-fns";

const START_YEAR = subYears(new Date(), 50).getFullYear();
const END_YEAR = addYears(new Date(), 50).getFullYear();

export const YEARS: string[] = Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, index) => {
  return `${START_YEAR + index}년`;
});

export const MONTHS = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

Object.freeze(YEARS);
Object.freeze(MONTHS);
