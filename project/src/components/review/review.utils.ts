import {RatingStars} from '../../types/offers-card-types';

export const getRatingStars = (rating: number) => {

  switch (rating) {
    case 5:
      return RatingStars.fiveStars;
    case 4:
      return RatingStars.fourStars;
    case 3:
      return RatingStars.threeStars;
    case 2:
      return RatingStars.twoStars;
    case 1:
      return RatingStars.oneStars;
    default:
      return RatingStars.oneStars;
  }
};
