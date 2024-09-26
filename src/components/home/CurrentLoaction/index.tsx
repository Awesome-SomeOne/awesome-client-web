import { PATH } from "@/constants/path";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import * as S from "./styles";
import { selectedIslandIdAtom } from "@/atoms/home/islandAtom";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";

const CurrentLocation = () => {
  const navigate = useNavigate();
  const [selectedIslandId] = useAtom(selectedIslandIdAtom);

  return (
    <S.CurrentLocationLayout>
      <S.CurrentLocationBox>
        <S.LocationImage src="/icons/location.svg" />
        {/* <S.LocationTitle>현재 위치</S.LocationTitle> */}
        <S.Location>{ISLAND_LIST.find((island) => island.id === selectedIslandId)?.name}</S.Location>
      </S.CurrentLocationBox>
      <S.DownArrow src="/icons/down.svg" onClick={() => navigate(PATH.LOCATION)} />
    </S.CurrentLocationLayout>
  );
};

export default CurrentLocation;
