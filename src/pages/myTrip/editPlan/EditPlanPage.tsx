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

export type PlaceType = { id: number; name: string; type?: string; address: string; image?: string };

const placeData: { day: number; places: PlaceType[] }[] = [
  {
    day: 1,
    places: [
      {
        id: 1,
        name: "산선암1",
        type: "관광명소",
        address: "경상북도 울릉도"
      },
      {
        id: 2,
        name: "산선암2",
        type: "관광명소",
        address: "경상북도 울릉도"
      }
    ]
  },
  {
    day: 2,
    places: [
      {
        id: 3,
        name: "산선암3",
        type: "관광명소",
        address: "경상북도 울릉도"
      },
      {
        id: 4,
        name: "산선암4",
        type: "관광명소",
        address: "경상북도 울릉도"
      }
    ]
  },
  {
    day: 3,
    places: [
      {
        id: 5,
        name: "산선암5",
        type: "관광명소",
        address: "경상북도 울릉도"
      },
      {
        id: 6,
        name: "산선암6",
        type: "관광명소",
        address: "경상북도 울릉도"
      }
    ]
  }
];

const EditPlanPage = ({ onPrev }: { onPrev: () => void }) => {
  const [placeList, setPlaceList] = useState<{ day: number; date: string; places: Place[] }[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [selectedDay, setSelectedDay] = useState(1);
  const [isMoveClicked, setIsMoveClicked] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);

  const handleDragStart = () => {
    setSelectedPlace(null);
  };

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
        // 해당 배열의 해당 순서에 넣기
        const updatedPlaces = placeList[destinationId].places;
        updatedPlaces.splice(destination.index, 0, { ...placeToMove });
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
      }
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    // 삭제 처리하기
    setIsDeleteModalOpen(false);
  };

  const handleMoveClick = () => {
    // 바텀시트 띄우기
    setSelectedDay(1);
    setIsMoveClicked(true);
  };

  const handleMove = () => {
    if (selectedPlace === null) return;

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
      setIsMoveClicked(false);
      return;
    }

    // 기존 배열에서 삭제하기
    const updatedPlaceList = placeList.map((dayObject) => {
      if (dayObject.day === originalDay) {
        return {
          ...dayObject,
          places: dayObject.places.filter((place) => place.id !== selectedPlace.id)
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
    setSelectedPlace(null);
    setIsMoveClicked(false);
    return;
  };

  return (
    <>
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
              // 저장하기
              console.log("편집 일정 저장");
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
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {day.places.map((place, index) => (
                        <PlaceContainer
                          key={index}
                          day={day.day}
                          place={place}
                          index={index}
                          checked={selectedPlace === place}
                          onClick={() => {
                            if (selectedPlace === place) {
                              setSelectedPlace(null);
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
              {placeData.map(({ day }, index) => (
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
          secondButtonOnClick={onPrev}
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
    <Draggable key={`day${day}-place${id}`} draggableId={`${id}`} index={index}>
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
