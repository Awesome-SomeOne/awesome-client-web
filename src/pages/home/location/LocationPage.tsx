import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Button from "@/components/common/button/index";
import GeneralHeader from "@/components/common/generalHeader/index";
import Appbar from "@/components/common/header/Appbar";
import Radio from "@/components/common/radio/index";
import { useState } from "react";
import { useAtom } from "jotai";
import * as S from "./styles";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";

type LocationType = "제주도" | "인천" | "경상남도" | "전라남도" | "전라북도";

const LocationData: Record<LocationType, string[]> = {
  제주도: ["제주도"],
  인천: ["영종도", "강화도"],
  경상남도: ["거제도", "남해도", "욕지도"],
  전라남도: ["진도", "완도", "흑산도"],
  전라북도: ["선유도"]
};

const LocationPage = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("제주도");

  const [selectedIslandId, setSelectedIslandId] = useAtom(selectedIslandIdAtom);
  const [selectedSubLocation, setSelectedSubLocation] = useState(
    ISLAND_LIST.find((island) => island.id === selectedIslandId)?.name
  );

  const handleLocationClick = (location: LocationType) => {
    setSelectedLocation(location);
  };

  const handleSubLocationClick = (subLocation: string) => {
    setSelectedSubLocation(subLocation);
  };

  const handleSelectDone = () => {
    setSelectedIslandId(ISLAND_LIST.find((island) => island.name === selectedSubLocation)?.id || 1);
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
        description="선택한 섬을 기반으로 인기 장소를 보여드려요"
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
        {/* 현재 위치 설정 */}
        {selectedSubLocation && <Button text="선택완료" size="lg" onClick={handleSelectDone} />}
      </S.Bottom>
    </div>
  );
};

export default LocationPage;
