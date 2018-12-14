
const initialState = {
    isLoading: false,
    state:12

};

export default (state = initialState, action) => {
  switch (action.type) {

  case 'SET_LOADING':
    console.log(action);

    return { ...state, isLoading: action.payload };

    case 'INCREASE_FONT_SIZE':
      return state !== 28 ? state + 4 : state;
    case 'DECREASE_FONT_SIZE':
      return state !== 12 ? state - 4 : state;

  default:
    return state
  }
};

