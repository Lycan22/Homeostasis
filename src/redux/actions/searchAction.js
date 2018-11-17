
import {
    SET_SEARCH_KEY,
    SET_ADV_SEARCH,
    GET_RESULT_SEARCH,
} from './actionType'

export const setSearchKey = (param) => ({
    type: SET_SEARCH_KEY,
    payload: param
});


export const setAdvKey = (advKey) => ({
    type: SET_ADV_SEARCH,
    advKey
});

export const getSearchResult = (rows) => ({
    type: GET_RESULT_SEARCH,
    payload: rows
});


