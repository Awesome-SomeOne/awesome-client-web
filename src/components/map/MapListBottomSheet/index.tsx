import DropdownIcon from "@/assets/icons/DropdownIcon";
import BottomSheet from "@/components/common/bottomSheet";

import ListComponent from "../ListComponent";
import * as S from "./styles";

interface MapListBottomSheetProps {
  close: () => void;
  isOpen: boolean;
}
const MapListBottomSheet = ({ close, isOpen }: MapListBottomSheetProps) => {
  return (
    <BottomSheet isOpen={isOpen} close={close} style={{ height: "50%" }} hasHandleBar={true} hasBackdrop={false}>
      <S.SortBox>
        <S.SortButton>
          최신순
          <DropdownIcon />
        </S.SortButton>
        <S.Text>총 999+</S.Text>
      </S.SortBox>
      <S.ListWrapper>
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </S.ListWrapper>
    </BottomSheet>
  );
};

export default MapListBottomSheet;
