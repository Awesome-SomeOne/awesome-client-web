import { useGetLandmarkPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import Chip from "@/components/common/chip/index";
import Appbar from "@/components/common/header/Appbar";
import { PopularPlaceComponent } from "@/components/place/PopularPlaceComponent/index";
import { Suspense, useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import ErrorBoundary from "@/hooks/Errorboundary";
import { useAtom } from "jotai";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import BottomSheet from "@/components/common/bottomSheet/index";
import useOverlay from "@/hooks/useOverlay";
import Radio from "@/components/common/radio/index";
import Button from "@/components/common/button/index";
import { ISLAND_LOCATION } from "@/constants/islandConstanst";

const PopularPlace = () => {
  const navigate = useNavigate();
  const [selectedIslandId] = useAtom(selectedIslandIdAtom);
  const [islandId, setIslandId] = useState(selectedIslandId);

  const { data: places = [] } = useGetLandmarkPlaces({ islandId });

  const { isOpen, open, close } = useOverlay();

  const [selectedLocation, setSelectedLocation] = useState<string>("제주도");
  const [selectedSubLocation, setSelectedSubLocation] = useState(
    ISLAND_LIST.find((island) => island.id === islandId)?.name
  );

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  const handleSubLocationClick = (subLocation: string) => {
    setSelectedSubLocation(subLocation);
  };

  useEffect(() => {
    close();
  }, [islandId]);

  useEffect(() => {
    setIslandId(selectedIslandId);
  }, []);

  const handleDropdownClick = () => {
    open();
  };

  const handleSelectDone = () => {
    setIslandId(ISLAND_LIST.find((island) => island.name === selectedSubLocation)?.id || 1);
  };

  return (
    <>
      <S.Container>
        <Chip
          text={ISLAND_LIST.find((island) => island.id === islandId)?.name}
          shape="box"
          trailingIcon={
            <div onClick={handleDropdownClick}>
              <DropdownIcon />
            </div>
          }
        />
        {places.map(
          (
            place: {
              id: number;
              name: string;
              imgUrl: string;
            },
            index: number
          ) => (
            <PopularPlaceComponent
              key={index}
              image={place.imgUrl || "/images/popular2.png"}
              name={place.name}
              onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
            />
          )
        )}
      </S.Container>
      <BottomSheet isOpen={isOpen} close={close} hasHandleBar={true} style={{ overflow: "hidden" }}>
        <>
          <div style={{ height: "100%", display: "flex", paddingTop: "36px" }}>
            {/* 왼쪽 */}
            <S.Left>
              {Object.keys(ISLAND_LOCATION).map((location) => (
                <S.LeftComponent
                  key={location}
                  onClick={() => handleLocationClick(location)}
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
                  {ISLAND_LOCATION[selectedLocation].map((subLocation: string) => (
                    <S.List onClick={() => handleSubLocationClick(subLocation)}>
                      <S.Text>{subLocation}</S.Text>
                      <Radio checked={selectedSubLocation === subLocation} />
                    </S.List>
                  ))}
                </div>
              )}
            </div>
          </div>
          <S.Bottom>{selectedSubLocation && <Button text="선택완료" size="lg" onClick={handleSelectDone} />}</S.Bottom>
        </>
      </BottomSheet>
    </>
  );
};

const PopularPlacePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="관광지 둘러보기"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <PopularPlace />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default PopularPlacePage;
