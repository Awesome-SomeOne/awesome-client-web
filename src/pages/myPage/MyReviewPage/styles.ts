import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  flex: 1;
`;

export const OuterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: fixed;
  top: 56px;
  width: 100%;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 20px 16px 20px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(112, 115, 124, 0.08);
  gap: 8px;
`;

export const AreaSection = styled.section`
  display: flex;
  flex: 1;
  align-items: center;
  background: rgba(248, 250, 251, 1);
  border-radius: 7px;
  padding: 8px;
  gap: 13px;
`;

export const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px soild ${Theme.colors.Border_Primary_Default};
`;

export const TextSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.p`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
`;

export const Category = styled.p`
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Assitive};
`;

export const BottomSection = styled.section``;

export const Address = styled.p`
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Assitive};
`;

export const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserSection = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
`;

export const StyledProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 9999px;
`;

export const InfoSection = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Nickname = styled.p`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Default};
`;

export const Date = styled.p`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Assitive};
`;

export const RatingSection = styled.section`
  display: flex;
  gap: 2px;
`;

export const Star = styled.img``;

export const Rating = styled.p`
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Primary_Default};
`;

export const Review = styled.p`
  ${Theme.typo.Body_M};
`;

export const ImageSection = styled.section`
  display: flex;
  width: 100%;
  gap: 8px;
`;

export const Image = styled.article`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: rgba(171, 179, 187, 1);
`;
