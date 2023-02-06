import { OffersCardTypes, RatingStars, OffersCardInterface } from '../types/offers-card-types';

const offersCards: OffersCardInterface[] = [
  {
    id: 1,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness' +
      ' of Amsterdam. The building is green and from 18th century',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 10,
      },
    },
    price: 120,
    isPremium: true,
    type: OffersCardTypes.APARTMENT,
    images: ['img/apartment-01.jpg', 'img/room.jpg', 'img/apartment-01.jpg',
      'img/apartment-02.jpg', 'img/apartment-03.jpg', 'img/studio-01.jpg'],
    ratingStars: RatingStars.fourStars,
    bedrooms: 3,
    location: {
      latitude: 52.22450804,
      longitude: 4.535795116,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    maxAdults: 4,
  },

  {
    id: 2,
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness' +
      ' of Paris. The building is green and from 19th century',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.864716,
        longitude: 4.897070,
        zoom: 10,
      },
    },
    price: 80,
    isPremium: false,
    type: OffersCardTypes.PRIVATE_ROOM,
    images: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg',
      'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    ratingStars: RatingStars.fourStars,
    bedrooms: 1,
    location: {
      latitude: 48.51529776,
      longitude: 2.205645045,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Towels', 'Heating', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    maxAdults: 3,
  },

  {
    id: 3,
    title: 'Canal View Prinsengracht',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness' +
      ' of Amsterdam.',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.897070,
        zoom: 10,
      },
    },
    price: 132,
    isPremium: false,
    type: OffersCardTypes.APARTMENT,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/apartment-01.jpg',
      'img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    ratingStars: RatingStars.fourStars,
    bedrooms: 2,
    location: {
      latitude: 52.22450806,
      longitude: 4.535795120,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Washing machine', 'Heating', 'Dishwasher', 'Cabel TV', 'Coffee machine'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    maxAdults: 6,
  },

  {
    id: 4,
    title: 'Nice, cozy, warm big bed apartment',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness' +
      ' of Amsterdam. The building is green and from 18th century',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.559998,
        longitude: 6.57,
        zoom: 10,
      },
    },
    price: 180,
    isPremium: true,
    type: OffersCardTypes.APARTMENT,
    images: ['img/apartment-03.jpg', 'img/room.jpg', 'img/apartment-01.jpg',
      'img/apartment-02.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
    ratingStars: RatingStars.fiveStars,
    bedrooms: 4,
    location: {
      latitude: 50.22450880,
      longitude: 6.535795520,
      zoom: 8,
    },
    facilities: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine',
      'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host: {
      id: 1,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    maxAdults: 7,
  },
];

export default offersCards;
