import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import * as S from "./styles";
import Divider from "@/components/common/divider/index";

const CarouselComponent = () => {
  return (
    <>
      <Divider />
      <Carousel
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        width="100%"
        renderIndicator={(onClickHandler, isSelected) => {
          return <S.Indicator onClick={onClickHandler} onKeyDown={onClickHandler} isSelected={isSelected} />;
        }}
      >
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
      </Carousel>
      <Divider />
    </>
  );
};

const CarouselImage = () => {
  return (
    <S.ImageContainer>
      <S.Image src="src/assets/images/carousel.png" />
    </S.ImageContainer>
  );
};

export default CarouselComponent;
