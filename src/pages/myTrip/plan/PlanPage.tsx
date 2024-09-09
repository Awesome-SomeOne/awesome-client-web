import GeneralHeader from "@/components/common/generalHeader/index";
import { useEffect, useState } from "react";
import AddPlacePage from "../addPlace/AddPlacePage";
import MapComponent from "@/components/myTrip/map/index";
import { AnimatePresence } from "framer-motion";
import Toast from "@/components/myTrip/toast/index";
import Appbar from "@/components/common/header/Appbar";
import { useNavigate, useLocation } from "react-router-dom";
import ClearIcon from "@/assets/icons/ClearIcon";
import { PATH } from "@/constants/path";
import Plan from "@/components/myTrip/plan/index";
import EditPlanPage from "../editPlan/EditPlanPage";
import SimpleModal from "@/components/common/simpleModal/index";
import MoreIcon from "@/assets/icons/MoreIcon";
import BottomSheet from "@/components/common/bottomSheet/index";
import * as S from "./styles";

const PlanPage = () => {
  const [day, setDay] = useState(1);
  const [isPageEditing, setIsPageEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { generated } = location.state || { generated: false };

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onAdd = () => {
    setIsAdding(true);
  };

  const onPageEdit = () => {
    setIsPageEditing(true);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  const onPageEditDone = () => {
    // 수정된 일정 저장
    setIsPageEditing(false);
  };

  const handleMore = () => {
    setShowDelete(true);
  };

  const handleClose = () => {
    // 수정 중인 일정 삭제
    if (isPageEditing && !showCloseModal) {
      setShowCloseModal(true);
    } else if (generated) {
      navigate(PATH.MY_TRIP_LIST);
    } else navigate(-1);
  };

  const handleDelete = () => {
    // 일정 삭제하기
    navigate(PATH.MY_TRIP_LIST);
  };

  const onPrev = () => {
    isAdding && setIsAdding(false);
    isEditing && setIsEditing(false);
  };

  return (
    <>
      <Appbar
        title=""
        textAlign="center"
        rightIcon1={
          <button onClick={handleMore}>
            <MoreIcon size="28" />
          </button>
        }
        rightIcon2={
          <button onClick={handleClose}>
            <ClearIcon size="28" />
          </button>
        }
      />
      {!isEditing && !isAdding && (
        <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
          {generated && <AnimatePresence>{showToast && <Toast message={"일정 생성 완료!"} />}</AnimatePresence>}
          <GeneralHeader title="울릉도" sub="2024.06.28 ~ 2024.06.30" titleSize="md" />
          <MapComponent
            positionList={[
              { lat: 33.55635, lng: 126.795841 },
              { lat: 33.556, lng: 126.7951 },
              { lat: 33.5565, lng: 126.795 }
            ]}
          />
          <Plan
            selectedDay={day}
            isPageEditing={isPageEditing}
            onPageEdit={onPageEdit}
            onAdd={onAdd}
            onEdit={onEdit}
            onPageEditDone={onPageEditDone}
            onSelect={(day: number) => setDay(day)}
          />
        </div>
      )}
      {isAdding && <AddPlacePage onPrev={onPrev} day={day} />}
      {isEditing && <EditPlanPage onPrev={onPrev} />}
      <BottomSheet isOpen={showDelete} close={() => setShowDelete(false)}>
        <S.BottomSheetContainer>
          <S.Delete
            onClick={() => {
              setShowDelete(false);
              setShowDeleteModal(true);
            }}
          >
            삭제하기
          </S.Delete>
        </S.BottomSheetContainer>
      </BottomSheet>
      <SimpleModal
        image="/src/assets/images/warning.svg"
        title="일정을 정말 삭제할까요?"
        content="삭제한 일정은 되돌릴 수 없어요"
        firstButtonText="취소"
        secondButtonText="삭제하기"
        firstButtonOnClick={() => setShowDeleteModal(false)}
        secondButtonOnClick={handleDelete}
        isOpen={showDeleteModal}
        close={() => setShowDeleteModal(false)}
      />
      <SimpleModal
        image="/src/assets/images/warning.svg"
        title="정말 나가시겠습니까?"
        content="지금까지 수정된 일정이 전부 지워집니다!"
        firstButtonText="취소"
        secondButtonText="나가기"
        firstButtonOnClick={() => setShowCloseModal(false)}
        secondButtonOnClick={handleClose}
        isOpen={showCloseModal}
        close={() => setShowCloseModal(false)}
      />
    </>
  );
};

export default PlanPage;
