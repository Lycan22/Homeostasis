import {
    DAY_OF_QUOTE,
} from './actionType'
import Realm from '../../database/realm';



export const getDayQuote = (rows) => {

    return {
        type: DAY_OF_QUOTE,
        remedy: rows
    }
};

