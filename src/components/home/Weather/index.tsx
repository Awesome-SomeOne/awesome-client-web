import * as S from "./styles";

const Weather = () => {
  return (
    <S.WeatherLayout>
      <div>
        <S.Temperature>32℃</S.Temperature>
        <S.WeatherInfo>00님, 오늘 날씨는 맑아요!</S.WeatherInfo>
      </div>
      {/* Null */}
    </S.WeatherLayout>
  );
};

export default Weather;
