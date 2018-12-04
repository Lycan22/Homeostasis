import fs from "react-native-fs";
import Realm from "realm";
import {Platform} from 'react-native';

const RemediesSchema = {
    name: 'Remedies',
    primaryKey: 'id',
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

export const querySection = (section) => new Promise((resolve, reject) => {
    Realm.open(allSchemas).then(realm => {
        let list = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
        resolve(list);
        console.log(list.length+"done")
    }).catch((error) => reject(error));


});

