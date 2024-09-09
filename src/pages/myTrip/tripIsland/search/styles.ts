import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Text = styled.span`
  color: ${Theme.colors.Label_Alternative};
  ${Theme.typo.Body_L};
`;

export const TextButton = styled.span`
  color: #1a80e5;
  ${Theme.typo.Body_L};
  cursor: pointer;
  text-decoration: underline;
`;
