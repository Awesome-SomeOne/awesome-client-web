import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const MyTripRecordPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: ${Theme.size.Header_Height} 0 98px;
  overflow-x: hidden;
`;

export const DescriptionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 8px 20px;
  ${Theme.typo.Title_XS}
`;

export const WritingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px 20px;
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Label_L}
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 20px 16px;
`;

export const Text = styled.span`
  &.label {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Label_L}
  }
  &.subtitle {
    color: ${Theme.colors.Label_Alternative};
    ${Theme.typo.Body_M}
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

export const GoToGalleryButtonWrapper = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 20px;
`;

export const MainImageContainer = styled.figure`
  width: 100%;
  height: 100%;
  text-align: center;
  align-content: center;
`;
