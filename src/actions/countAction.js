import { INCREASE, DECREASE } from './types';

export const increment = () => ({ type: INCREASE });
export const decrement = () => ({ type: DECREASE });