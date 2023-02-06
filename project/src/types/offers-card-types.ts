export enum OffersCardTypes {
  PRIVATE_ROOM = 'Private room',
  ROOM = 'Room',
  APARTMENT = 'Apartment',
  STUDIO = 'Studio',
}

export enum RatingStars {
  fiveStars = 100,
  fourStars = 80,
  threeStars = 60,
  twoStars = 40,
  oneStars = 20,
}

export type OffersLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OffersCity = {
  name: string;
  location: OffersLocation;
}

type OffersHost = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface OffersCardInterface {
  id: number;
  title: string;
  description: string;
  city: OffersCity;
  price: number;
  isPremium: boolean;
  type: OffersCardTypes;
  images: string[];
  ratingStars: RatingStars;
  bedrooms: number;
  location: OffersLocation;
  facilities: string[];
  host: OffersHost;
  maxAdults: number;
}

type ReviewUser = {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewType = {
  id: number;
  user: ReviewUser;
  comment: string;
  date: string;
  rating: number;
};
