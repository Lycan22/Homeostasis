import React, {Component} from 'react';
import fs from 'react-native-fs';
import Remedies from '../database/schema'
import Realm from 'realm';


export default class realmDB {

    static _realm;

    static _init() {
        fs.copyFileAssets('home.realm', fs.DocumentDirectoryPath + '/home.realm').
        then(()=>{
            realmDB._realm =new Realm({
                path: Platform.OS === 'ios'
                    ? fs.MainBundlePath + '/home.realm'
                    : fs.DocumentDirectoryPath + '/home.realm',
                schema: [Remedies],
                readOnly:true
            });
            const remedies = realmDB.objects('Remedies');
           console.log('length remedy'+remedies.length);
        });
    }

    static getInstance() {
        if (!realmDB._realm) {
            realmDB._init();
        }
        return realmDB._realm;
    }
}
