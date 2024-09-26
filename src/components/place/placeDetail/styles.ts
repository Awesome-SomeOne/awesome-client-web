import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const DetailCotainer = styled.div`
  height: 100%;
  padding-bottom: 64px;
  overflow: scroll;
`;

export const DetailInfoContainer = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DetailImage = styled.div<{ src: string }>`
  width: 100%;
  min-width: 200px;
  aspect-ratio: 16 / 9;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const DetailHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PlaceName = styled.div`
  ${Theme.typo.Title_S};
`;

export const Time = styled.div`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Alternative};
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Info = styled.div`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Alternative};
  display: flex;
  gap: 4px;
`;

export const Introduction = styled.div`
  ${Theme.typo.Body_L};
  color: ${Theme.colors.Label_Default};
  padding: 0 20px 16px 20px;
`;

export const ReviewContainer = styled.div`
  padding: 8px 20px 8px 20px;
  border-bottom: 1px solid ${Theme.colors.Border_Default};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 4px;
`;

export const UserImage = styled.div<{ src: string }>`
  background: url(${({ src }) => src});
  width: 24px;
  aspect-ratio: 1;
  border-radius: 9999px;
  background-position: center;
  background-size: cover;
`;

export const UserCenter = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.div`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Default};
`;

export const Date = styled.div`
  ${Theme.typo.Body_S};
  color: ${Theme.colors.Label_Assitive};
`;

export const Rating = styled.div`
  ${Theme.typo.Label_M};
  color: ${Theme.colors.Label_Primary_Default};
  display: flex;
  gap: 2px;
`;

export const ReviewContent = styled.div`
  ${Theme.typo.Body_M};
  color: ${Theme.colors.Label_Default};
`;

export const ReviewImageContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ReviewImage = styled.div<{ src: string }>`
  background: url(${({ src }) => src});
  width: 48px;
  aspect-ratio: 1;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
`;
