import BottomNavBar from "@/components/common/bottomNavBar";
import AppBarIcons from "@/components/home/AppBarIcons/index";
import CarouselComponent from "@/components/home/Carousel/index";
import CurrentLocation from "@/components/home/CurrentLoaction/index";
import MyTripRecord from "@/components/home/MyTripRecord/index";
import MyTripToday from "@/components/home/MyTripToday/index";
import PopularPlace from "@/components/place/PopularPlace/index";
import RecommendPlace from "@/components/place/RecommendPlace/index";
import Ship from "@/components/home/Ship/index";
// import Weather from "@/components/home/Weather/index";
import * as S from "./styles";

const HomePage = () => {
  return (
    <div style={{ height: "100%", overflow: "scroll" }}>
      <S.HomeLayout>
        <S.AppBar>
          <CurrentLocation />
          <AppBarIcons />
        </S.AppBar>
        {/* <Weather /> */}
        <MyTripToday />
        <MyTripRecord />
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
