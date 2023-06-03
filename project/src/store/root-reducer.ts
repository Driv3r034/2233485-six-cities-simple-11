import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../constants';
import offersCards from '../mocks/offers-cards';
import { selectCityAction } from './actions';

const initialState = {
  selectedCity: CITIES[0],
  offers: offersCards,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    });
});

export {rootReducer};
