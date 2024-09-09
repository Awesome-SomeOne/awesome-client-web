import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  padding: 0 20px 64px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
`;
