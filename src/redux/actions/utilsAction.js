import {DECREASE_FONT_SIZE,INCREASE_FONT_SIZE} from '../actions/actionType'

export const setLoading = (param) => ({
  type: 'SET_LOADING',
  payload: param,
});


export const increaseFont = () => ({
  type: 'INCREASE_FONT_SIZE',
});

export const decreaseFont = () => ({
  type: 'DECREASE_FONT_SIZE',
});
