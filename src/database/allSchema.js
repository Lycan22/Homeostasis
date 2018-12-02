import fs from "react-native-fs";
import Realm from "realm";

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

export const queryAll = () => new Promise((resolve, reject) => {
    Realm.open(allSchemas).then(realm => {
        let all = realm.objects('Remedies');
        resolve(all);
        console.log(all.length+"done")
    }).catch((error) => reject(error));
});

