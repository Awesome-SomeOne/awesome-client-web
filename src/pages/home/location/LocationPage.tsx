import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import Appbar from "@/components/common/header/Appbar";
import Radio from "@/components/common/radio/index";
import { useState } from "react";
import * as S from "./styles";

type LocationType = "제주도" | "경기도" | "인천" | "전라남도" | "전라북도" | "경상남도" | "경상북도";

const LocationData: Record<LocationType, string[]> = {
  제주도: ["전체", "서귀포", "제주시"],
  경기도: ["전체", "제부도", "남이섬", "서호도", "백미리섬", "장봉도"],
  인천: ["전체"],
  전라남도: ["전체"],
  전라북도: ["전체"],
  경상남도: ["전체"],
  경상북도: ["전체"]
};

const LocationPage = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("제주도");
  const [selectedSubLocation, setSelectedSubLocation] = useState("");

  const handleLocationClick = (location: LocationType) => {
    setSelectedSubLocation("");
    setSelectedLocation(location);
  };

  const handleSubLocationClick = (subLocation: string) => {
    setSelectedSubLocation(subLocation);
  };

  const handleSelectDone = () => {
    console.log("위치 선택 완료 처리");
    navigate(-1);
  };

  return (
    <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column" }}>
      <Appbar
        title="검색"
        textAlign="center"
        rightIcon1={
          <div onClick={() => navigate(-1)}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <GeneralHeader
        title="섬을 선택해주세요"
        description="선택한 섬을 기반으로 날씨, 인기 장소를 보여드려요"
        titleSize="sm"
        spacingSize="md"
      />
      <div style={{ height: "100%", display: "flex" }}>
        {/* 왼쪽 */}
        <S.Left>
          {Object.keys(LocationData).map((location) => (
            <S.LeftComponent
              key={location}
              onClick={() => handleLocationClick(location as LocationType)}
              selected={selectedLocation === location}
            >
              {location}
            </S.LeftComponent>
          ))}
        </S.Left>

        {/* 오른쪽 */}
        <div style={{ flex: "1" }}>
          {selectedLocation && (
            <div>
              {LocationData[selectedLocation].map((subLocation: string) => (
                <S.List onClick={() => handleSubLocationClick(subLocation)}>
                  <S.Text>{subLocation}</S.Text>
                  <Radio checked={selectedSubLocation === subLocation} />
                </S.List>
              ))}
            </div>
          )}
        </div>
      </div>
      <S.Bottom>
        현재 위치 설정
        {selectedSubLocation && <Button text="선택완료" size="lg" onClick={handleSelectDone} />}
      </S.Bottom>
    </div>
  );
};

export default LocationPage;
