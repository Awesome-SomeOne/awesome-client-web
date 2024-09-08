import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  background: ${Theme.colors.Bg_Default};
  border-radius: 8px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const UserProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Text = styled.span`
  &.nickname {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_S};
  }
  &.time {
    color: ${Theme.colors.Label_Assitive};
    ${Theme.typo.Body_S};
  }
  &.status {
    // TODO: 여행중이면 Theme.colors.Status_Success
    color: ${Theme.colors.Label_Assitive};
    ${Theme.typo.Label_M};
    transform: translateX(-4px);
  }
  &.content-title {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_L};
  }
  &.content-description {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Body_M};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${Theme.colors.Surface_Divider};
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

export const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 208px;
`;

export const CardContentRight = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background: ${Theme.colors.Surface_Default};
`;

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 9999px;
  background: ${Theme.colors.Fill_Primary_Lightest};
  color: ${Theme.colors.Fill_Primary_Default};
  ${Theme.typo.Label_M};
`;

export const CardDataWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Alternative};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
