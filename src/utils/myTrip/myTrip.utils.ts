import { Day } from "@/types/myTrip";
import { format, eachDayOfInterval } from "date-fns";

export const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
  const toRadians = (degree: number) => (degree * Math.PI) / 180;

  const R = 6371000;

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lng2 - lng1);

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;

  return distance.toFixed(0);
};

export const getDatesArray = (startDate: string, endDate: string) => {
  const dates: string[] = [];

  const betweenDates = eachDayOfInterval({
    start: new Date(startDate),
    end: new Date(endDate)
  });

  betweenDates.forEach((date) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    dates.push(formattedDate);
  });

  return dates;
};

export const getDaysArray = (daysBetween: number) => {
  const daysArray = [];

  for (let i = 1; i <= daysBetween + 1; i++) {
    daysArray.push(`Day ${i}`);
  }

  return daysArray;
};

export const calculateDaysBetween = (startDate: string, endDate: string): number => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const differenceInMillis = end - start;
  const millisPerDay = 1000 * 60 * 60 * 24;
  return Math.floor(differenceInMillis / millisPerDay) + 1;
};

export const calculateDatesArray = (startDate: string, endDate: string): Day[] => {
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
