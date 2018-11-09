import {
    LIST_REMEDY,
    ADD_PAGE,
    SET_SECTION,
    RESET_PAGE,
    DETAILS_REMEDY,
} from './actionType'
import realm from '../../database/realm';
let realmDB =realm.getInstance();


export const getSection = () => {
    return (dispatch, getState) => {
        let section = getState().remedy.section;
        console.log("inside the retrieveSQL Transaction");
        SQLiteObj.transaction((tx) => {
            tx.executeSql('SELECT id,remedy,synopsis FROM Remedies WHERE id LIKE ?', [section], (tx, results) => {
                let rows = results.rows.raw();
                dispatch(getRemedyList(rows));
            });
        });

    };
};

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















