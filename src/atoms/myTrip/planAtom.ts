import { atom, useAtom } from "jotai";
import { format } from "date-fns";
import { Day, Place } from "@/types/myTrip";

export const islandIdAtom = atom<number | null>(null);
export const startDateAtom = atom<string | null>(null);
export const endDateAtom = atom<string | null>(null);
export const planNameAtom = atom<string | null>(null);

export const planGeneratingAtom = atom((get) => {
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

  const resetAtoms = () => {
    setIslandId(null);
    setStartDate(null);
    setEndDate(null);
    setPlanName(null);
  };

  return resetAtoms;
};

const calculateDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const differenceInMillis = end - start;
  const millisPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(differenceInMillis / millisPerDay) + 1; // +1 to include both start and end days
};

const calculateDatesArray = (startDate: string, endDate: string): Day[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysBetween = calculateDaysBetween(startDate, endDate);

  return Array.from({ length: daysBetween }, (_, i) => {
    const dayDate = new Date(start);
    dayDate.setDate(start.getDate() + i);
    return {
      day: i + 1,
      date: format(dayDate, "yyyy-MM-dd"),
      places: []
    };
  });
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
                ...places.filter((newPlace) => !day.places.some((existingPlace) => existingPlace.id === newPlace.id))
              ]
            }
          : day
      )
    );
  };

  return addPlacesToDay;
};
