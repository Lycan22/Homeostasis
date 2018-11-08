import { SET_SEARCH_KEY, GET_RESULT_SEARCH,SET_ADV_SEARCH } from "../actions/actionType";

const initialState = {
    search: '',
    advKey:"",
    remedy: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_SEARCH_KEY:
            return { ...state, search: action.payload, };

        case GET_RESULT_SEARCH:
            return { ...state, remedy: action.payload, };

        case SET_ADV_SEARCH:
            return {...state, advKey: action.advKey};

        default:
            return state
    }
};

export default searchReducer;