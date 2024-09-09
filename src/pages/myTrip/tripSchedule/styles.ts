import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const TripScheduleLayout = styled.div`
  width: 100%;
`;

export const Selector = styled.div`
  width: 100%;
  padding: 8px 20px;
  color: ${Theme.colors.Label_Alternative};
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
`;

export const DateRangeWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
`;

export const BottomSheetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HandleBar = styled.div`
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  &::after {
    content: "";
    background: #a0a3ae;
    width: 80px;
    height: 4px;
    border-radius: 4px;
  }
`;
