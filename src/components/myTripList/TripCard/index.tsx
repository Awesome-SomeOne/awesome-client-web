import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

import { PATH } from "../../../constants/path";
import { useDeleteTravel } from "@/apis/myTrip/myTrip.queries";
import MoreIcon from "@/assets/icons/MoreIcon";
import SimpleModal from "@/components/common/simpleModal";

import LineButton from "../../common/lineButton";
import * as S from "./styles";

interface ITripCardProps {
  id: number;
  recordId: number;
  imgSrc: string;
  status: string; // TODO: enum으로 변경
  location: string;
  startDate: string;
  endDate: string;
  onClick?: () => void;
}

const TripCard = ({ id, recordId, imgSrc, status, location, startDate, endDate, onClick }: ITripCardProps) => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { mutateAsync: deletePlan } = useDeleteTravel();
  const queryClient = useQueryClient();

  const handleDelete = () => {
    if (!id) return;
    deletePlan(
      {
        planId: id
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["getMyTripList"] });
        }
      }
    );
  };

  const getTripStatus = (startDate: string, endDate: string): string => {
    const today = dayjs();
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    if (today.isBefore(start, "day")) {
      return "여행전";
    } else if (today.isAfter(end, "day")) {
      return "여행완료";
    } else {
      return "여행중";
    }
  };

  return (
    <S.TripCard onClick={onClick}>
      <S.ImageAndTextContainer>
        <S.ImageWrapper src={imgSrc} />
        <S.TextWrapper>
          <S.TripStatusText>{getTripStatus(startDate, endDate)}</S.TripStatusText>
          <S.TripLocationText>{location}</S.TripLocationText>
          <S.TripTimeText>
            {startDate} - {endDate}
          </S.TripTimeText>
        </S.TextWrapper>
      </S.ImageAndTextContainer>
      <S.ButtonWrapper>
        <LineButton
          text="추억 기록하기"
          onClick={(e: any) => {
            e.stopPropagation();
            navigate(`${PATH.MY_TRIP_RECORD(id)}?recordId=${recordId}`);
          }}
          size="sm"
          style={{ width: "100%" }}
        />
        {recordId && (
          <LineButton
            text="자세히 보기"
            onClick={(e: any) => {
              e.stopPropagation();
              navigate(PATH.MY_TRIP_RECORD_DETAIL(id, recordId));
            }}
            size="sm"
            style={{ width: "100%" }}
          />
        )}
      </S.ButtonWrapper>
      <S.MoreIconButton
        onClick={() => {
          setShowDeleteModal(true);
        }}
      >
        <MoreIcon size={"24px"} />
      </S.MoreIconButton>
      <SimpleModal
        image="/images/warning.svg"
        title="일정을 정말 삭제할까요?"
        content="삭제한 일정은 되돌릴 수 없어요"
        firstButtonText="취소"
        secondButtonText="삭제하기"
        firstButtonOnClick={() => {
          setShowDeleteModal(false);
        }}
        secondButtonOnClick={handleDelete}
        isOpen={showDeleteModal}
        close={() => {
          setShowDeleteModal(false);
        }}
      />
    </S.TripCard>
  );
};

export default TripCard;
