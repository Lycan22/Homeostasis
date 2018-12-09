import {
    LIST_REMEDY,
    ADD_PAGE,
    SET_SECTION,
    RESET_PAGE,
    DETAILS_REMEDY,
} from "../actions/actionType";


const initialState = {
    list: [],
    page: 1,
    section: '',
    selected: '',
    selectedRem: {},
};

const remedyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION:
            return {
                ...state,
                section: action.section
            };

        case LIST_REMEDY:
            return {
                ...state,
                list: action.list
            };
        case ADD_PAGE:
            return {
                ...state,
                page: state.page++
            };

        case RESET_PAGE:
            return {
                ...state,
                page: 1
            };
        case SELECT_REMEDY:
            return {
                ...state,
                selected: action.payload
            };
        case DETAILS_REMEDY:
            return {
                ...state,
                selectedRem: action.payload
            };

        default:
            return state;
    }
};


export default remedyReducer;
