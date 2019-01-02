import fs from "react-native-fs";
import {Platform} from 'react-native';

export const RemediesSchema = {
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


export const QuotesSchema = {
    name: 'Quotes',
    properties: {
        author: 'string?',
        content: 'string?',
    },
};


export const quoSchemas ={
    path: Platform.OS === 'ios'
        ? fs.MainBundlePath + '/quotes.realm'
        : fs.DocumentDirectoryPath + '/quotes.realm',
    schema: [QuotesSchema],
    schemaVersion: 0, //no section4
    readOnly:true
};



export const remSchemas ={
    path: Platform.OS === 'ios'
        ? fs.MainBundlePath + '/home.realm'
        : fs.DocumentDirectoryPath + '/home.realm',
    schema: [RemediesSchema],
    schemaVersion: 0, //75 item
    readOnly:true
};

/**
export function querySection(section) {
    return new Promise((resolve, reject) => {
        Realm.open(allSchemas).then(realm => {
            const list = realm.objects('Remedies');
            const list_results = list.filtered(`id CONTAINS[c] "${section}"`);
            resolve(list_results);
            console.log(list_results.length);
            setTimeout(() => {
                realm.close();
            }, 0);
        }).catch(e => console.log(e));
    });
}
/**
export const querySection = (section) => new Promise((resolve, reject) => {
    Realm.open(allSchemas).then(realm => {
        let list = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
        resolve(list);
        console.log(list[49].synopsis+"done")
    }).catch((error) => reject(error));

});**/
