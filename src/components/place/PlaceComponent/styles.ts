import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const ComponentBox = styled.div`
  flex-shrink: 0;
  background-color: ${Theme.colors.Bg_Default};
  width: 100%;
  border-radius: 8px;
  padding-bottom: 16px;
  box-shadow: ${Theme.shadow.Shadow_Md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Image = styled.div<{ src: string }>`
  width: 100%;
  aspect-ratio: 2;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 16px;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.span`
  ${Theme.typo.Title_XS};
  color: ${Theme.colors.Label_Default};
`;

export const Rating = styled.div`
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Primary_Default};
  height: 16px;
  display: flex;
  gap: 2px;
`;

export const Address = styled.div`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Alternative};
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Heart = styled.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 8px;
  right: 8px;
`;
