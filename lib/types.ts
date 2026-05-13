export type BikeCategory = "regular" | "electric" | "selfPropelled";

export interface Bike {
  id: string;
  name: string;
  category: BikeCategory;
  price: number;
  rating: number;
  description: string;
  features: string[];
  image: string;
}

export type EventType = "click" | "view" | "filter";

export interface TrackedEvent {
  id: string;
  type: EventType;
  description: string;
  timestamp: Date;
}
