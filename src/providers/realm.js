import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import fs from 'react-native-fs';
import Realm from 'realm';


const RemediesSchema ={
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

    }
};

export const databaseOptions =  fs.copyFileAssets('home.realm', fs.DocumentDirectoryPath + '/home.realm').
then(()=>{
    const realm =new Realm({
        path: Platform.OS === 'ios'
            ? fs.MainBundlePath + '/home.realm'
            : fs.DocumentDirectoryPath + '/home.realm',
        schema: [RemediesSchema],
        readOnly:true
    });
    const remedies = realm.objects('Remedies');
    console.log('length remedy'+remedies.length);

});
export default new Realm(databaseOptions)

