export interface Island {
  id: number;
  name: string;
  address: string;
}

export interface Place {
  id: number;
  name: string;
  address: string;
  category: string;
  imgUrl?: string;
  rating?: number;
  day?: number;
  x_address: string;
  y_address: string;
  date?: string;
  order?: number;
}

export interface Day {
  day: number;
  date: string;
  places: Place[];
}
