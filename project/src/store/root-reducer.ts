import { createReducer } from '@reduxjs/toolkit';
import { cityNames } from '../constants';
import offersCards from '../mocks/offers-cards';
import { selectCityAction } from './actions';

const initialState = {
  selectedCity: cityNames.PARIS,
  offers: offersCards,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCityAction, (state, action) => {
      state.selectedCity = action.payload;
    });
});

export {rootReducer};
