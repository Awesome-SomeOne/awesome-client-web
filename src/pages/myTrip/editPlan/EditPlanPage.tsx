import { useEffect, useState } from "react";
import {
  DraggableProvided,
  DroppableProvided,
  DraggableStateSnapshot,
  DragUpdate,
  DragDropContext,
  Droppable,
  Draggable
} from "react-beautiful-dnd";
import LineButton from "@/components/common/lineButton/index";
import Radio from "@/components/common/radio/index";
import Button from "@/components/common/button/index";
import SimpleModal from "@/components/common/simpleModal/index";
import BottomSheet from "@/components/common/bottomSheet/index";
import Appbar from "@/components/common/header/Appbar";
import BackIcon from "@/assets/icons/BackIcon";
import { Theme } from "@/styles/theme";
import * as S from "./styles";
import { Place } from "@/types/myTrip";
import { useAtom } from "jotai";
import { daysAtom } from "@/atoms/myTrip/planAtom";
import Toast from "@/components/myTrip/toast/index";
import { AnimatePresence } from "framer-motion";

const EditPlanPage = ({ onPrev }: { onPrev: () => void }) => {
  const [initialPlaceList, setInitialPlaceList] = useState<{ day: number; date: string; places: Place[] }[]>([]);
  const [placeList, setPlaceList] = useState<{ day: number; date: string; places: Place[] }[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place>();
  const [selectedDay, setSelectedDay] = useState(1);
  const [isMoveClicked, setIsMoveClicked] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [days, setDays] = useAtom(daysAtom);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => setShowToast(false), 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [showToast]);

  const handleDragStart = () => {
    setSelectedPlace(undefined);
  };

  useEffect(() => {
    if (initialPlaceList.length === 0) {
      setInitialPlaceList(days.map((day) => ({ ...day, places: [...day.places] })));
    }
    setPlaceList(days);
  }, [days]);

  const handleDragEnd = ({ source, destination }: DragUpdate) => {
    if (source && destination) {
      const sourceId = Number(source.droppableId);
      const destinationId = Number(destination.droppableId);
      // 같은 Day로 이동할 때
      if (sourceId === destinationId) {
        // 기존 배열에서 삭제하기
        const placeToMove = placeList[sourceId].places[source.index];
        const updatedPlaces = placeList[sourceId].places.filter((_, index) => index !== source.index);
        // 해당 순서에 넣기
        updatedPlaces.splice(destination.index, 0, { ...placeToMove });

        // order 변경
        updatedPlaces.forEach((place, index) => {
          place.order = index + 1;
        });

        // 새로운 리스트 생성하기
        const newPlaceList = placeList.slice();
        newPlaceList[sourceId] = {
          ...newPlaceList[sourceId],
          places: updatedPlaces
        };
        setPlaceList(newPlaceList);
      }
      // 다른 Day로 이동할 때
      else {
        // 기존 배열에서 삭제하기
        const placeToMove = placeList[sourceId].places[source.index];
        const removedPlaces = placeList[sourceId].places.filter((_, index) => index !== source.index);

        const alreadyExists = placeList[destinationId].places.some(
          (place) => place.name === placeToMove.name && place.category === placeToMove.category
        );

        if (!alreadyExists) {
          // 해당 배열의 해당 순서에 넣기
          const updatedPlaces = placeList[destinationId].places;
          updatedPlaces.splice(destination.index, 0, { ...placeToMove });

          // order, date 변경
          removedPlaces.forEach((place, index) => {
            place.order = index + 1;
          });
          updatedPlaces.forEach((place, index) => {
            place.order = index + 1;
            place.date = placeList[destinationId].date;
          });

          // 새로운 리스트 생성하기
          const newPlaceList = placeList.slice();
          newPlaceList[sourceId] = {
            ...newPlaceList[sourceId],
            places: removedPlaces
          };
          newPlaceList[destinationId] = {
            ...newPlaceList[destinationId],
            places: updatedPlaces
          };
          setPlaceList(newPlaceList);
        } else {
          setShowToast(true);
        }
      }
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    const newPlaceList = placeList.map((day) => ({
      ...day,
      places: day.places.filter((place) => place !== selectedPlace)
    }));
    setPlaceList(newPlaceList);
    setIsDeleteModalOpen(false);
  };

  const handleMoveClick = () => {
    const selectedPlaceDay = placeList.filter((day) => day.places.find((place) => place === selectedPlace))[0].day;
    setSelectedDay(selectedPlaceDay);
    setIsMoveClicked(true);
  };

  const handleMove = () => {
    if (!selectedPlace) return;

    // 원래 속해있던 day 구하기
    let originalDay: number | undefined;
    placeList.forEach((day) => {
      let place = day.places.find((place) => place.id === selectedPlace.id);
      if (place) {
        originalDay = day.day;
      }
    });

    // 같은 날짜 선택 시
    if (originalDay === selectedDay) {
      setSelectedPlace(undefined);
      setIsMoveClicked(false);
      return;
    }

    const alreadyExists = placeList[selectedDay - 1].places.some(
      (place) => place.name === selectedPlace.name && place.category === selectedPlace.category
    );
    if (alreadyExists) {
      setShowToast(true);
      setSelectedPlace(undefined);
      setIsMoveClicked(false);
      return;
    }

    // 기존 배열에서 삭제하기
    const updatedPlaceList = placeList.map((dayObject) => {
      if (dayObject.day === originalDay) {
        return {
          ...dayObject,
          places: dayObject.places.filter((place) => place.name !== selectedPlace.name)
        };
      } else {
        return dayObject;
      }
    });

    // 이동할 날짜에 추가하기
    const newPlaceList = updatedPlaceList.map((dayObject) => {
      if (dayObject.day === selectedDay) {
        return {
          ...dayObject,
          places: [...dayObject.places, selectedPlace]
        };
      } else {
        return dayObject;
      }
    });
    setPlaceList(newPlaceList);
    setSelectedPlace(undefined);
    setIsMoveClicked(false);
    return;
  };

  return (
    <>
      <AnimatePresence>{showToast && <Toast message={"해당 날짜에 이미 추가된 장소입니다"} />}</AnimatePresence>
      <Appbar
        title="장소 편집"
        textAlign="center"
        leftIcon={
          <div onClick={() => setIsCloseModalOpen(true)}>
            <BackIcon />
          </div>
        }
        rightIcon1={
          <div
            onClick={() => {
              setDays(placeList);
              onPrev();
            }}
          >
            <S.DoneButton>완료</S.DoneButton>
          </div>
        }
      />

      <div
        style={{
          paddingTop: "56px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "hidden"
        }}
      >
        <div style={{ height: "100%", flexGrow: "1", overflow: "scroll" }}>
          <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            {placeList.map((day, index) => (
              <Droppable droppableId={index.toString()} key={index}>
                {(provided: DroppableProvided) => (
                  <S.DayContainer>
                    <S.DayText>Day {day.day}</S.DayText>
                    <div ref={provided.innerRef} {...provided.droppableProps} style={{ minHeight: "35px" }}>
                      {day.places.map((place, index) => (
                        <PlaceContainer
                          key={index}
                          day={day.day}
                          place={place}
                          index={index}
                          checked={selectedPlace === place}
                          onClick={() => {
                            if (selectedPlace === place) {
                              setSelectedPlace(undefined);
                            } else {
                              setSelectedPlace(place);
                            }
                          }}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  </S.DayContainer>
                )}
              </Droppable>
            ))}
          </DragDropContext>
        </div>
        {selectedPlace && (
          <S.ButtonContainer>
            <LineButton text="삭제하기" size="lg" style={{ width: "100%" }} onClick={handleDeleteClick} />
            <Button text="날짜 이동하기" size="lg" style={{ width: "100%" }} onClick={handleMoveClick} />
          </S.ButtonContainer>
        )}
        <BottomSheet isOpen={isMoveClicked} close={() => setIsMoveClicked(false)}>
          <>
            <S.DaysUl>
              {days.map(({ day }, index) => (
                <S.DayLi key={index} selected={day === selectedDay} onClick={() => setSelectedDay(day)}>
                  Day {day}
                </S.DayLi>
              ))}
            </S.DaysUl>
            <S.DayButtonContainer>
              <Button text="취소" size="lg" isTertiaryButton onClick={() => setIsMoveClicked(false)} />
              <Button size="lg" text="선택 완료" onClick={handleMove} />
            </S.DayButtonContainer>
          </>
        </BottomSheet>
        <SimpleModal
          image="/src/assets/images/warning.svg"
          title="편집하지 않고 나가시겠습니까?"
          content="지금까지 편집된 일정이 전부 지워집니다!"
          firstButtonText="취소"
          secondButtonText="나가기"
          firstButtonOnClick={() => setIsCloseModalOpen(false)}
          secondButtonOnClick={() => {
            setDays(initialPlaceList);
            onPrev();
          }}
          isFilled
          isOpen={isCloseModalOpen}
          close={() => setIsCloseModalOpen(false)}
        />
        <SimpleModal
          image="/src/assets/images/warning.svg"
          title="일정에서 정말 삭제할까요?"
          content="해당 항목이 일정에서 지워집니다"
          firstButtonText="취소"
          secondButtonText="삭제하기"
          firstButtonOnClick={() => setIsDeleteModalOpen(false)}
          secondButtonOnClick={handleDelete}
          isFilled
          isOpen={isDeleteModalOpen}
          close={() => setIsDeleteModalOpen(false)}
        />
      </div>
    </>
  );
};

const PlaceContainer = ({
  day,
  place,
  index,
  checked,
  onClick
}: {
  day: number;
  place: Place;
  index: number;
  checked: boolean;
  onClick: () => void;
}) => {
  const { id, name, category, address } = place;
  return (
    <Draggable key={`day${day}-place${id}`} draggableId={`day${day}-place${id}`} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <S.PlaceContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDragging ? Theme.colors.Fill_Primary_Lightest : undefined,
            ...provided.draggableProps.style
          }}
        >
          <img src="/src/assets/icons/handle.svg" {...provided.dragHandleProps} />
          <S.PlaceBox>
            <S.PlaceImage src={"/src/assets/images/place.png"} />
            <div style={{ width: "100%" }}>
              <S.UpperText>
                <S.PlaceName>{name}</S.PlaceName>
                <S.PlaceDesc>{category}</S.PlaceDesc>
              </S.UpperText>
              <S.PlaceDesc>{address}</S.PlaceDesc>
            </div>
            <Radio checked={snapshot.isDragging || checked} onClick={onClick} />
          </S.PlaceBox>
        </S.PlaceContainer>
      )}
    </Draggable>
  );
};

export default EditPlanPage;
