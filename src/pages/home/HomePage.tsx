import AppBarIcons from "@/components/home/AppBarIcons/index";
import CarouselComponent from "@/components/home/Carousel/index";
import CurrentLocation from "@/components/home/CurrentLoaction/index";
import MyTrip from "@/components/home/MyTrip/index";
import MyTripToday from "@/components/home/MyTripToday/index";
import PopularPlace from "@/components/home/PopularPlace/index";
import RecommendPlace from "@/components/home/RecommendPlace/index";
import Ship from "@/components/home/Ship/index";
import Weather from "@/components/home/Weather/index";
import { useState } from "react";
import DetailPage from "./detail/DetailPage";
import LikePage from "./like/LikePage";
import LocationPage from "./location/LocationPage";
import NotificationPage from "./notification/NotificationPage";
import PopularPlacePage from "./popularPlace/PopularPlacePage";
import RecommendPlacePage from "./recommendPlace/RecommendPlacePage";
import SearchPage from "./search/SearchPage";
import * as S from "./styles";

const HomePage = () => {
  const [step, setStep] = useState("home");

  const handleClick = (step: string) => {
    setStep(step);
  };

  return (
    <>
      {step === "home" && (
        <S.HomeLayout>
          <S.AppBar>
            <CurrentLocation onClick={handleClick} />
            <AppBarIcons onClick={handleClick} />
          </S.AppBar>
          <Weather />
          <MyTripToday />
          <MyTrip />
          <CarouselComponent />
          <PopularPlace onClick={handleClick} />
          <RecommendPlace onClick={handleClick} />
          <Ship />
        </S.HomeLayout>
      )}
      {step === "location" && <LocationPage onClose={() => setStep("home")} />}
      {step === "search" && <SearchPage onClose={() => setStep("home")} />}
      {step === "like" && <LikePage onClose={() => setStep("home")} />}
      {step === "notification" && <NotificationPage onClose={() => setStep("home")} />}
      {step === "popularPlace" && <PopularPlacePage onClose={() => setStep("home")} />}
      {step === "recommendPlace" && <RecommendPlacePage onClose={() => setStep("home")} />}
      {step === "detail" && <DetailPage onClose={() => setStep("home")} />}
    </>
  );
};

export default HomePage;
