/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AppRegistry} from 'react-native';
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
fs.copyFileAssets('home.realm', fs.DocumentDirectoryPath + '/home.realm').
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


export default class App extends Component {

render() {
return (
 <View style={styles.container}>
   <Text style={styles.welcome}>Welcome to React Native!</Text>
   <Text style={styles.instructions}>To get started, edit App.js</Text>
   <Text style={styles.instructions}>instructions</Text>
 </View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#FFF',
},
welcome: {
fontSize: 20,
textAlign: 'center',
margin: 10,
},
instructions: {
textAlign: 'center',
color: '#333333',
marginBottom: 5,
},
});
