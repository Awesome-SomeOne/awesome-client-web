import { useGetRecommendPlaces } from "@/apis/place/place.queries";
import { useNavigate } from "react-router-dom";
import BackIcon from "@/assets/icons/BackIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/place/PlaceComponent/index";
import { Suspense, useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { useAtom } from "jotai";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import ErrorBoundary from "@/hooks/Errorboundary";
import Chip from "@/components/common/chip/index";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import useOverlay from "@/hooks/useOverlay";
import BottomSheet from "@/components/common/bottomSheet/index";
import Button from "@/components/common/button/index";
import Radio from "@/components/common/radio/index";
import { ISLAND_LOCATION } from "@/constants/islandConstanst";

const RecommendPlace = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(CATEGORY_LIST[0]);
  const [selectedIslandId] = useAtom(selectedIslandIdAtom);
  const [islandId, setIslandId] = useState(selectedIslandId);

  const { data: places = [] } = useGetRecommendPlaces({ islandId: islandId, category: currentTab });

  const { isOpen, open, close } = useOverlay();

  const [selectedLocation, setSelectedLocation] = useState<string>("제주도");
  const [selectedSubLocation, setSelectedSubLocation] = useState(
    ISLAND_LIST.find((island) => island.id === islandId)?.name
  );

  const handleTabClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

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
        <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleTabClick} />
        <div style={{ padding: "0 20px" }}>
          <Chip
            text={ISLAND_LIST.find((island) => island.id === islandId)?.name}
            shape="box"
            trailingIcon={
              <div onClick={handleDropdownClick}>
                <DropdownIcon />
              </div>
            }
          />
        </div>
        <S.ComponentCol>
          {places.map(
            (
              place: {
                id: number;
                name: string;
                address: string;
                imgUrl: string;
                rating: number;
                status: boolean;
              },
              index: number
            ) => (
              <PlaceComponent
                key={index}
                id={place.id}
                image={place.imgUrl || "/images/place_null.svg"}
                name={place.name}
                rating={place.rating?.toString() || "5.0"}
                count={1000}
                address={place.address}
                like={place.status}
                onClick={() => navigate(PATH.PLACE_DETAIL(place.id))}
              />
            )
          )}
        </S.ComponentCol>
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
          <S.Bottom>
            {selectedSubLocation && (
              <Button
                text="선택완료"
                size="lg"
                onClick={handleSelectDone}
                disabled={selectedSubLocation === ISLAND_LIST.find((island) => island.id === islandId)?.name}
              />
            )}
          </S.Bottom>
        </>
      </BottomSheet>
    </>
  );
};

const RecommendPlacePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="추천 장소"
        textAlign="center"
        leftIcon={
          <div onClick={() => navigate(-1)}>
            <BackIcon />
          </div>
        }
      />
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <RecommendPlace />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default RecommendPlacePage;
