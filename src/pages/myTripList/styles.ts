import styled from "@emotion/styled";

import { Theme } from "@/styles/theme";

export const MyTripListPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${Theme.size.Header_Height} 20px calc(${Theme.size.BottomNavBar_Height} + 8px);
`;
