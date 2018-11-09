import {
    LIST_REMEDY,
    ADD_PAGE,
    SET_SECTION,
    RESET_PAGE,
    DETAILS_REMEDY,
} from './actionType'
import Realm from '../../database/realm';



export const getRemedyList = (rows) => {

    return {
        type: LIST_REMEDY,
        remedy: rows
    }
};


export const resetPage = () => {

    return {
        type: RESET_PAGE
    }
};

export const setSection = (section) => {

    return {
        type: SET_SECTION,
        section
    }
};


export const nextPage = () => {

    return {
        type: ADD_PAGE
    }
};

export const selectRemedyDetails = (id) => {
    return {
        type: DETAILS_REMEDY,
        payload: id
    }
};















