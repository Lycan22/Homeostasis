import fs from "react-native-fs";
import Realm from "realm";
import {Platform} from 'react-native';
import {LIST_REMEDY} from './../redux/actions/actionType'

const RemediesSchema = {
    name: 'Remedies',
    properties: {
        id: 'string?',
        remedy: 'string?',
        concomitants: 'string?',
        location: 'string?',
        aetiology: 'string?',
        modalities: 'string?',
        synopsis: 'string?',
        keynote: 'string?',
        constitutional: 'string?'
    },
};


const allSchemas ={
    path: Platform.OS === 'ios'
        ? fs.MainBundlePath + '/home.realm'
        : fs.DocumentDirectoryPath + '/home.realm',
    schema: [RemediesSchema],
    readOnly:true
};

export const querySection = (section) => {
    return (dispatch) => {
        Realm.open(allSchemas).then(realm => {
            let remedy = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
            dispatch(getRemedyList(remedy));
            console.log(getRemedyList(remedy.length))
            });

    }
};

export const getRemedyList = (remedy) => {

    return {
        type: LIST_REMEDY,
        remedy: remedy
    }
};



/**
export const querySection = (section) => new Promise((resolve, reject) => {
    Realm.open(allSchemas).then(realm => {
        let list = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
        resolve(list);
        console.log(list[49].synopsis+"done")
    }).catch((error) => reject(error));

});**/
