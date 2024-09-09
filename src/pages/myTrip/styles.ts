import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const MyTripLayout = styled.div`
  background: linear-gradient(180deg, rgba(189, 227, 255, 0) 15.6%, rgba(189, 227, 255, 0.5) 100%);
  width: 100%;
  height: 100vh;
  height: -webkit-fill-available;
  height: fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const TextSection = styled.section`
  width: 250px;
  text-align: center;
  margin-bottom: -9px;
`;

export const Title = styled.p`
  color: ${Theme.colors.Label_Default};
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

export const Paragraph = styled.p`
  color: ${Theme.colors.Label_Default};
  font-size: 16px;
  line-height: 24px;
`;
