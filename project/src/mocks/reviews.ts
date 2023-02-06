import { ReviewType } from '../types/offers-card-types';

export const reviews: ReviewType[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Dec 10 2022 14:34:47 GMT+0300 (Moscow Standard Time)',
    rating: 4,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Dec 10 2022 14:34:47 GMT+0300 (Moscow Standard Time)',
    rating: 2,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: 'Angelina',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Dec 10 2022 14:34:47 GMT+0300 (Moscow Standard Time)',
    rating: 3,
  },
  {
    id: 4,
    user: {
      id: 4,
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
      isPro: true,
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Sat Dec 10 2022 14:34:47 GMT+0300 (Moscow Standard Time)',
    rating: 1,
  }
];
