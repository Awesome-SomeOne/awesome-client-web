export interface Place {
  id: number;
  name: string;
  address: string;
  category?: string;
  image?: string;
}

export interface Day {
  day: number;
  date: string;
  places: Place[];
}
