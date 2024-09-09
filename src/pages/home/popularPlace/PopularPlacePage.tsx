import BackIcon from "@/assets/icons/BackIcon";
import DropdownIcon from "@/assets/icons/DropdownIcon";
import Chip from "@/components/common/chip/index";
import Appbar from "@/components/common/header/Appbar";
import { Place } from "@/components/home/PopularPlacePage/index";
import { useEffect, useState } from "react";
import DetailPage from "../detail/DetailPage";
import * as S from "./styles";

const PopularPlacePage = ({ onClose }: { onClose: () => void }) => {
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return !showDetail ? (
    <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
      <Appbar
        title="관광지 둘러보기"
        textAlign="center"
        leftIcon={
          <div onClick={onClose}>
            <BackIcon />
          </div>
        }
      />
      <S.Container>
        <Chip text="섬 전체" shape="box" trailingIcon={<DropdownIcon />} />
        <Place
          image={"/src/assets/images/popular2.png"}
          name={"울릉도 현포 남방파제"}
          onClick={() => setShowDetail(true)}
        />
        <Place
          image={"/src/assets/images/popular2.png"}
          name={"울릉도 현포 남방파제"}
          onClick={() => setShowDetail(true)}
        />
        <Place
          image={"/src/assets/images/popular2.png"}
          name={"울릉도 현포 남방파제"}
          onClick={() => setShowDetail(true)}
        />
      </S.Container>
    </div>
  ) : (
    <DetailPage onClose={() => setShowDetail(false)} />
  );
};

export default PopularPlacePage;
