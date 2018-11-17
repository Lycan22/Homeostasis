import {
    DAY_OF_QUOTE,
} from './actionType'




export const getDayQuote = (rows) => {

    return {
        type: DAY_OF_QUOTE,
        remedy: rows
    }
};

