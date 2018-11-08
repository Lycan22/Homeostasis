import {
    DAY_OF_QUOTE,
} from './actionType'
import Realm from '../../providers/realm';
let SQLiteObj = Realm.getInstance();

export const getQuotes = () => {
    return dispatch => {
        console.log("inside the retrieveSQL Transaction");
        SQLiteObj.transaction((tx) => {
            tx.executeSql('SELECT * FROM Quotes ORDER BY RAND () LIMIT 1', [], (tx, results) => {
                let rows = results.rows.raw();
                dispatch(getDayQuote(rows));
            });
        });

    };
};

export const getDayQuote = (rows) => {

    return {
        type: DAY_OF_QUOTE,
        remedy: rows
    }
};

