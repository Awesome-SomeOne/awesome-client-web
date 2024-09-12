import BottomNavBar from "@/components/common/bottomNavBar";
import AppBarIcons from "@/components/home/AppBarIcons/index";
import CarouselComponent from "@/components/home/Carousel/index";
import CurrentLocation from "@/components/home/CurrentLoaction/index";
import MyTrip from "@/components/home/MyTrip/index";
import MyTripToday from "@/components/home/MyTripToday/index";
import PopularPlace from "@/components/home/PopularPlace/index";
import RecommendPlace from "@/components/home/RecommendPlace/index";
import Ship from "@/components/home/Ship/index";
import Weather from "@/components/home/Weather/index";
import * as S from "./styles";

const HomePage = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <S.HomeLayout>
        <S.AppBar>
          <CurrentLocation />
          <AppBarIcons />
        </S.AppBar>
        <Weather />
        <MyTripToday />
        <MyTrip />
        <CarouselComponent />
        <PopularPlace />
        <RecommendPlace />
        <Ship />
      </S.HomeLayout>
      <BottomNavBar />
    </div>
  );
};

export default HomePage;
