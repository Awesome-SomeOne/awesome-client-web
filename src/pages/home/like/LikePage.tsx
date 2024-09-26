import { useNavigate } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import Appbar from "@/components/common/header/Appbar";
import TabAnatomy from "@/components/common/tabAnatomy/index";
import PlaceComponent from "@/components/place/PlaceComponent/index";
import { CATEGORY_LIST } from "@/constants/homePageConstants";
import { Suspense, useEffect, useState } from "react";
import * as S from "./styles";
import { PATH } from "@/constants/path";
import { useGetLikedPlaces } from "@/apis/place/place.queries";
import ErrorBoundary from "@/hooks/Errorboundary";

const Like = ({ currentTab }: { currentTab: string }) => {
  const navigate = useNavigate();

  const { data: places = [] } = useGetLikedPlaces({ businessType: currentTab });
  const [likedPlaces, setLikedPlaces] = useState(places);

  useEffect(() => {
    setLikedPlaces(places);
  }, [places]);

  const handleUnlike = (businessId: number) => {
    setLikedPlaces((prevPlaces: any) => prevPlaces.filter((place: any) => place.businessId !== businessId));
  };

  return (
    <>
      {likedPlaces.length ? (
        <S.ComponentCol>
          {places.map(
            (
              place: {
                businessId: number;
                businessName: string;
                imageUrl: string;
                address: string;
              },
              index: number
            ) => (
              <PlaceComponent
                key={index}
                id={place.businessId}
                image={place.imageUrl || "/images/accommodation.png"}
                name={place.businessName}
                rating={"5.0"}
                count={1000}
                address={place.address}
                like={true}
                onClick={() => navigate(PATH.PLACE_DETAIL(place.businessId))}
                onUnlike={() => handleUnlike(place.businessId)}
              />
            )
          )}
        </S.ComponentCol>
      ) : (
        <S.NoResultContainer>
          <S.NoResultTitle>맘에 들어한 장소가 없어요</S.NoResultTitle>
          <S.NoResultParagraph>마음에 든 장소 담으러 가볼까요?</S.NoResultParagraph>
        </S.NoResultContainer>
      )}
    </>
  );
};

const LikePage = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(CATEGORY_LIST[0]);

  const handleClick = (event: any) => {
    setCurrentTab(event.target.innerText);
  };

  return (
    <div style={{ height: "100%", paddingTop: "56px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Appbar
        title="좋아요 모음"
        textAlign="center"
        rightIcon1={
          <div onClick={() => navigate(-1)}>
            <ClearIcon size="28" />
          </div>
        }
      />
      <TabAnatomy tabs={CATEGORY_LIST} selectedTab={currentTab} onClick={handleClick} />
      <ErrorBoundary fallback={<>에러 발생</>}>
        <Suspense fallback={<>로딩중...</>}>
          <Like currentTab={currentTab} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default LikePage;
