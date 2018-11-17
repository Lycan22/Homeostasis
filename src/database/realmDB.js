import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import fs from 'react-native-fs';
import Realm from 'realm';
import RemediesSchema from './schema'


export default class realm {

    static _realm;

    static _init() {
        fs.copyFileAssets('home.realm', fs.DocumentDirectoryPath + '/home.realm').
        then(()=>{
            realm._realm =new Realm({
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
        if (!realm._realm) {
            realm._init();
        }
        return realm._realm;
    }
}
