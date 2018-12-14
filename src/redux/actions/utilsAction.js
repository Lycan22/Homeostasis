import {DECREASE_FONT_SIZE,INCREASE_FONT_SIZE} from '../actions/actionType'

export const setLoading = (param) => ({
  type: 'SET_LOADING',
  payload: param,
});


export const increaseFont = (param) => ({
  type: 'INCREASE_FONT_SIZE',
  payload: param,
});

export const decreaseFont = (param) => ({
  type: 'DECREASE_FONT_SIZE',
  payload: param,
});
