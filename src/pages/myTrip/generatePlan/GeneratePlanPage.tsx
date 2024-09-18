import GeneralHeader from "@/components/common/generalHeader/index";
import PlanGenerating from "@/components/myTrip/planGenerating/index";
import { useEffect, useState } from "react";
import EditPlanPage from "@/pages/myTrip/editPlan/EditPlanPage";
import { Day, Place } from "@/types/myTrip";
import AddPlacePage from "../addPlace/AddPlacePage";
import MapComponent from "@/components/myTrip/map/index";
import { useAtom } from "jotai";
import { daysAtom, planAtom } from "@/atoms/myTrip/planAtom";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";
import { Map } from "react-kakao-maps-sdk";

const GeneratePlanPage = ({ recommended = [] }: { recommended?: Place[] }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [days] = useAtom(daysAtom);
  const [{ islandId, startDate, endDate }] = useAtom(planAtom);
  const islandName = ISLAND_LIST.find((island) => island.id === islandId)?.name || "";

  const getPositionList = () => {
    return days
      .filter((day: Day) => day.day === selectedDay)
      .flatMap((day: Day) => day.places)
      .map((place: Place) => {
        return {
          lat: parseFloat(place.y_address || "0"),
          lng: parseFloat(place.x_address || "0")
        };
      });
  };

  const [positionList, setPositionList] = useState(getPositionList());
  const [position, setPosition] = useState<{ lat: string; lng: string }>();

  useEffect(() => {
    setPositionList(getPositionList());
  }, [selectedDay, days]);

  useEffect(() => {
    if (positionList.length) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(islandName, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        setPosition({ lat: data[0].y, lng: data[0].x });
      }
    });
  }, [positionList]);

  const onAdd = () => {
    setIsAdding(true);
  };
  const onEdit = () => {
    setIsEditing(true);
  };

  const onPrev = () => {
    isAdding && setIsAdding(false);
    isEditing && setIsEditing(false);
  };

  return (
    <>
      {!isEditing && !isAdding && (
        <>
          <div style={{ height: "100%", paddingTop: "56px", overflow: "hidden" }}>
            <GeneralHeader title={islandName} sub={`${startDate} ~ ${endDate}`} titleSize="md" />
            {positionList.length ? (
              <MapComponent positionList={positionList} />
            ) : (
              position && (
                <Map
                  center={{ lat: parseFloat(position.lat) - 0.033, lng: parseFloat(position.lng) }}
                  style={{ width: "100%", height: "100%" }}
                  level={10}
                ></Map>
              )
            )}
            <PlanGenerating
              selectedDay={selectedDay}
              recommended={recommended}
              onAdd={onAdd}
              onEdit={onEdit}
              onSelect={(day: number) => setSelectedDay(day)}
            />
          </div>
        </>
      )}
      {isAdding && <AddPlacePage onPrev={onPrev} day={selectedDay} />}
      {isEditing && <EditPlanPage onPrev={onPrev} />}
    </>
  );
};

export default GeneratePlanPage;
