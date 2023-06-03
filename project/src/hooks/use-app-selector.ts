import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../types/offers-card-types';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
