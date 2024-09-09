import styled from "@emotion/styled";
import { Theme } from "@/styles/theme";

export const WeatherLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: ${Theme.colors.Bg_Default};
`;

export const Temperature = styled.p`
  color: ${Theme.colors.Label_Primary_Default};
  font-size: 24px;
  font-weight: 700;
`;

export const WeatherInfo = styled.p`
  ${Theme.typo.Title_XS};
  color: ${Theme.colors.Label_Default};
`;
