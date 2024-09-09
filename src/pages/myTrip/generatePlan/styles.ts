import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";
import { motion } from "framer-motion";

export const BottomSection = styled.div`
  width: 100%;
  height: min-content;
  max-height: calc(60% - 64px);
  /* max-height: calc(60% - 64px + 52px); */
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1000;
`;

export const EmptyBox = styled.div`
  color: ${Theme.colors.Label_Alternative};
  width: 90%;
  height: 54px;
  max-height: 60%;
  margin: auto;
  border: 1px solid ${Theme.colors.Border_Default};
  box-shadow: ${Theme.shadow.Shadow_Md};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceContainer = styled(motion.div)<{ height: string }>`
  background: ${Theme.colors.Bg_Default};
  width: 100%;
  height: ${({ height }) => height};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const Row = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Date = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

export const Weather = styled.span`
  color: ${Theme.colors.Status_Success};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  display: flex;
  gap: 4px;
`;

export const AddBox = styled.div`
  background-color: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Alternative};
  width: 100%;
  min-height: 80px;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const PlaceBox = styled.div`
  background-color: ${Theme.colors.Surface_Alternative};
  color: ${Theme.colors.Label_Alternative};
  width: 100%;
  height: 80px;
  padding: 16px;
  margin: 0 auto;
  border: 1px solid ${Theme.colors.Border_Default};
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  display: flex;
  align-items: center;
  gap: 13px;
  align-self: center;
`;

export const PlaceImage = styled.img<{ src: string }>`
  width: 48px;
  aspect-ratio: 1;
  border-radius: 4px;
  object-fit: cover;
`;

export const UpperText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PlaceName = styled.span`
  font-size: 16px;
`;

export const PlaceDesc = styled.span`
  color: ${Theme.colors.Label_Assitive};
  font-size: 12px;
  font-weight: 600;
`;

export const ChipsContainer = styled.div`
  min-height: 52px;
  padding: 8px 20px;
  overflow-x: auto;
  display: flex;
  gap: 8px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DayButtonContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 8px;
`;

export const BottomSheetTopContainer = styled.div`
  padding: 0 20px 8px 20px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.p`
  color: ${Theme.colors.Label_Default};
  ${Theme.typo.Title_XS};
  text-align: start;
`;

export const DaysUl = styled.ul`
  overflow: scroll;
  max-height: calc(90vh - 384px);
`;

export const DayLi = styled.li<{ selected: boolean }>`
  background: ${({ selected }) => (selected ? Theme.colors.Surface_Primary : Theme.colors.Surface_Default)};
  color: ${({ selected }) => (selected ? Theme.colors.Label_Primary_Strong : Theme.colors.Label_Default)};
  height: 48px;
  ${Theme.typo.Body_L};
  padding: 12px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &::after {
    ${Theme.typo.Label_L};
    content: "${({ selected }) => (selected ? "선택" : "")}";
  }
`;
