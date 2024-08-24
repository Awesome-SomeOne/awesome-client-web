import { Theme } from "@/styles/theme";
import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 64px;
`;

export const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 20px;
`;

export const Text = styled.p`
  &.title {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Title_M}
  }
  &.content {
    color: ${Theme.colors.Label_Default};
    ${Theme.typo.Body_L}
  }
`;

export const ImageFlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;
