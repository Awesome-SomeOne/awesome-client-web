import { atom, useAtom } from "jotai";

import { Day, Place } from "@/types/myTrip";
import { calculateDatesArray } from "@/utils/myTrip/myTrip.utils";

export const islandIdAtom = atom<number | null>(null);
export const recordIdAtom = atom<number | null>(null);
export const startDateAtom = atom<string | null>(null);
export const endDateAtom = atom<string | null>(null);
export const planNameAtom = atom<string | null>(null);

export const planAtom = atom((get) => {
  const islandId = get(islandIdAtom);
  const startDate = get(startDateAtom);
  const endDate = get(endDateAtom);
  const planName = get(planNameAtom);

  return { islandId, startDate, endDate, planName };
});

export const useResetAtoms = () => {
  const [, setIslandId] = useAtom(islandIdAtom);
  const [, setStartDate] = useAtom(startDateAtom);
  const [, setEndDate] = useAtom(endDateAtom);
  const [, setPlanName] = useAtom(planNameAtom);

  const resetPlanAtom = () => {
    setIslandId(null);
    setStartDate(null);
    setEndDate(null);
    setPlanName(null);
  };

  return resetPlanAtom;
};

export const daysAtom = atom<Day[]>([]);

export const daysInitAtom = atom(
  (get) => get(daysAtom),
  (get, set, { startDate, endDate }: { startDate: string | null; endDate: string | null }) => {
    if (startDate && endDate) {
      const days = calculateDatesArray(startDate, endDate);
      set(daysAtom, days);
    } else {
      set(daysAtom, []);
    }
  }
);

export const useUpdateDaysAtom = () => {
  const [, setDays] = useAtom(daysAtom);

  const addPlacesToDay = (dayNumber: number, places: Place[]) => {
    setDays((currentDays) =>
      currentDays.map((day) =>
        day.day === dayNumber
          ? {
              ...day,
              places: [
                ...day.places,
                ...places.filter(
                  (newPlace) =>
                    !day.places.some(
                      (existingPlace) =>
                        existingPlace.name === newPlace.name && existingPlace.category === newPlace.category
                    )
                )
              ]
            }
          : day
      )
    );
  };

  return addPlacesToDay;
};
