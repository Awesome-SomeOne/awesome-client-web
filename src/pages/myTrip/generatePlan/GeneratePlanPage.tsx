import GeneralHeader from "@/components/common/generalHeader/index";
import PlanGenerating from "@/components/myTrip/planGenerating/index";
import { useState } from "react";
import EditPlanPage, { PlaceType } from "@/pages/myTrip/editPlan/EditPlanPage";
import AddPlacePage from "../addPlace/AddPlacePage";
import MapComponent from "@/components/myTrip/map/index";

const GeneratePlanPage = ({ recommended = [] }: { recommended?: PlaceType[] }) => {
  const [day, setDay] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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
            <GeneralHeader title="울릉도" sub="2024.06.28 ~ 2024.06.30" titleSize="md" />
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
