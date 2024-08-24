import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const FullPageModalContainer = styled.section`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${Theme.colors.Bg_Default};
`;

export const ContentWrapper = styled.div`
  height: 100%;
  padding-top: ${Theme.size.Header_Height};
`;
