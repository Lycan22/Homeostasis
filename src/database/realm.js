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

export default class RealmInstance {

    static _realm;

    static _init() {
        fs.copyFileAssets('home.realm', fs.DocumentDirectoryPath + '/home.realm').
        then(()=>{
            RealmInstance._realm =new Realm({
                path: Platform.OS === 'ios'
                    ? fs.MainBundlePath + '/home.realm'
                    : fs.DocumentDirectoryPath + '/home.realm',
                schema: [RemediesSchema],
                readOnly:true
            });
            //  const remedies = realm.objects('Remedies');
            //  console.log('length remedy'+remedies.length);
        });
    }

    static getInstance() {
        if (!RealmInstance._realm) {
            RealmInstance._init();
        }
        return RealmInstance._realm;
    }
}



