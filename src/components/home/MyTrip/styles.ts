import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const MyTripLayout = styled.div`
  background-color: ${Theme.colors.Bg_Default};
`;

export const MyTripContainer = styled.div`
  padding: 0 20px;
`;

// 다녀온 여행 없을 때
export const BlueBox = styled.div`
  background-color: ${Theme.colors.Surface_Primary};
  width: 100%;
  padding: 16px;
  margin: auto;
  border: 1px solid ${Theme.colors.Border_Primary_Default};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Paragraph = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
`;

// 다녀온 여행 있을 때
export const ImageBox = styled.div<{ bgUrl: string; credit: string }>`
  background: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 2;
  margin: auto;
  border: 1px solid #76b2ef80;
  border-radius: 8px;
  position: relative;

  &::after {
    content: "${(props) => props.credit}";
    color: ${Theme.colors.Label_Assitive};
    font-size: 8px;
    width: 100%;
    position: absolute;
    bottom: 8px;
    right: 8px;
    text-align: end;
  }
`;

export const Chip = styled.div`
  background: ${Theme.colors.Dim_Default};
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Inverse};
  height: 30px;
  padding: 4px 8px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 11px;
`;

export const Info = styled.div`
  color: ${Theme.colors.Label_Inverse};
  position: absolute;
  bottom: 10px;
  left: 8px;
`;

export const Title = styled.p`
  ${Theme.typo.Body_XL};
`;

export const Itinerary = styled.div`
  ${Theme.typo.Label_L};
`;
