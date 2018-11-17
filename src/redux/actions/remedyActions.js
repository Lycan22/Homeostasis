import {
    LIST_REMEDY,
    ADD_PAGE,
    SET_SECTION,
    RESET_PAGE,
    DETAILS_REMEDY,
} from './actionType'



export const etSection = () => {
    return (dispatch, getState) => {
        let section = getState().remedy.section;
        console.log("inside the Realm Transaction");
        realmDB.objects('Remedies').filtered('id LIKE "' + section + '"');
    };
};

export const getSection = (resolve, reject) => {
    Realm.open(realmDB)
        .then(realm =>
            realm.write(() => {
                let allObject = realm.objects('Remedies');
                resolve(allObject);
            }))
        .catch(err => {
            console.warn(`Faill get all ${'Remedies'}, ${err}`);
            reject(err);
        });
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















