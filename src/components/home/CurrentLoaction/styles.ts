import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const CurrentLocationLayout = styled.div`
  width: 100%;
  height: 32px;
  padding: 8px;
  border: 1px solid ${Theme.colors.Border_Primary_Strong};
  border-radius: 999px;
  background: ${Theme.colors.Fill_Primary_Lightest};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurrentLocationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${Theme.typo.Label_L};
  flex: 1;
`;

export const LocationImage = styled.img<{ src: string }>`
  width: 20px;
  object-fit: cover;
`;

export const LocationTitle = styled.span`
  color: ${Theme.colors.Label_Default};
  white-space: nowrap;
`;

export const Location = styled.span`
  color: ${Theme.colors.Label_Primary_Strong};
  max-width: 45%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
`;

export const DownArrow = styled.img<{ src: string }>`
  width: 16px;
  cursor: pointer;
`;
