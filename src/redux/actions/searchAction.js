import Realm from '../../providers/realm';
let SQLiteObj = Realm.getInstance();

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


export const advSearch = (text) => {
    return (dispatch,getState)=> {
        let advKey = getState().search.advKey || "";
        console.log("inside the retrieveSQL Transaction");
        console.log(advKey);
        SQLiteObj.transaction((tx) => {
            tx.executeSql("SELECT "+advKey+",id,remedy FROM Remedies WHERE "+advKey+" LIKE '%"+text+"%' LIMIT 20", [] , (tx, results) => {
                let rows = results.rows.raw();
                console.log(rows);
                dispatch(getSearchResult(rows));
            });
        });
    }};

