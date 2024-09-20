import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  flex: 1;
`;

export const InnerContainer = styled.section`
  width: 100%;
  padding-bottom: 64px;
`;

export const ProfileSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px 16px 20px;
  gap: 10px;
  position: relative;
`;

export const ProfileImageContainer = styled.article`
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  background-color: ${Theme.colors.Surface_Primary};
`;

export const StyledImage = styled.img`
  border-radius: 9999px;
`;

export const StyledNickNameContainer = styled.div``;

export const StyledNickName = styled.p`
  ${Theme.typo.Label_L};
  color: ${Theme.colors.Label_Default};
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  padding: 8px 16px 8px 16px;
`;

export const StyledButton = styled.button`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Alternative};
`;

export const ButtonSection = styled.section`
  width: 100%;
`;

export const CommonBtnContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  gap: 8px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
`;

export const CommonBtn = styled.button`
  ${Theme.typo.Body_L};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CommonImgContainer = styled.div`
  width: 24px;
  height: 24px;
`;
