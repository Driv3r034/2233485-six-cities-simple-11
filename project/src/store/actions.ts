import { createAction } from '@reduxjs/toolkit';
import { OffersCity } from '../types/offers-card-types';

const selectCityAction = createAction('offer/SelectCity', (city: OffersCity) => ({payload: city}));
const getOfferAction = createAction('offer/GetOffers');

export {selectCityAction, getOfferAction};
