import GeneralHeader from "@/components/common/generalHeader/index";
import PlanGenerating from "@/components/myTrip/planGenerating/index";
import { useState } from "react";
import EditPlanPage from "@/pages/myTrip/editPlan/EditPlanPage";
import { Place } from "@/types/myTrip";
import AddPlacePage from "../addPlace/AddPlacePage";
import MapComponent from "@/components/myTrip/map/index";
import { useAtom } from "jotai";
import { planGeneratingAtom } from "@/atoms/myTrip/planAtom";
import { ISLAND_LIST } from "@/constants/myTripPageConstants";

const GeneratePlanPage = ({ recommended = [] }: { recommended?: Place[] }) => {
  const [day, setDay] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [{ islandId, startDate, endDate }] = useAtom(planGeneratingAtom);
  const islandName = ISLAND_LIST.find((island) => island.id === islandId)?.name;

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
            <MapComponent
              positionList={[
                { lat: 33.55635, lng: 126.795841 },
                { lat: 33.556, lng: 126.7951 },
                { lat: 33.5565, lng: 126.795 }
              ]}
            />
            <PlanGenerating
              selectedDay={day}
              recommended={recommended}
              onAdd={onAdd}
              onEdit={onEdit}
              onSelect={(day: number) => setDay(day)}
            />
          </div>
        </>
      )}
      {isAdding && <AddPlacePage onPrev={onPrev} day={day} />}
      {isEditing && <EditPlanPage onPrev={onPrev} />}
    </>
  );
};

export default GeneratePlanPage;
