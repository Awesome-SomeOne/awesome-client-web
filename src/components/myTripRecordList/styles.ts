import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  width: 80%;
  height: 184px;
  margin: auto;
  background-color: ${Theme.colors.Surface_Default};
  padding: 16px;
  border-radius: 8px;
  box-shadow: ${Theme.shadow.Shadow_Md};
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const Area = styled.p`
  ${Theme.typo.Label_L};
  color: ${Theme.colors.Label_Default};
`;

export const Date = styled.p`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Assitive};
`;

export const StyledText = styled.p`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Alternative};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PhotoSection = styled.section`
  display: flex;
  width: 100%;
  height: 104px;
  border-radius: 8px;
  margin-top: 8px;
  overflow: hidden;
`;

export const FullImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const MainImage = styled.img`
  width: 72%;
  height: 100%;
`;

export const MultipleImageSection = styled.section`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

export const HalfImage = styled.img`
  width: 100%;
  height: 50%;
`;

export const LeftImageSection = styled.section`
  width: 72%;
  height: 100%;
`;

export const RightImageSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 28%;
  height: 100%;
  overflow: hidden;
  border-radius: 0 8px 8px 0;
`;
