import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const IslandCard = styled.div<{ src: string }>`
  width: 240px;
  aspect-ratio: 3 / 4;
  margin: 0 auto;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
`;

export const TextContainer = styled.div`
  color: #ffffff;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 22px;
  left: 8px;
`;

export const IslandName = styled.span`
  ${Theme.typo.Body_L};
`;

export const IslandAddress = styled.span`
  ${Theme.typo.Label_M};
`;

export const ButtonContainer = styled.div`
  background: ${Theme.colors.Bg_Default};
  width: 100%;
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: absolute;
  bottom: 0;
`;

export const TextButton = styled.span`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_L};
  cursor: pointer;
`;

export const ListContainer = styled.div`
  overflow: auto;
  height: calc(100% - 64px);
`;
