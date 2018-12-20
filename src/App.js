/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import Router from './Router';
import Realm from "realm";
import fs from "react-native-fs";
import {Platform} from 'react-native';


class App extends React.Component {
    render() {
        fs.unlink(Platform.OS === 'ios'
            ? fs.MainBundlePath + '/home.realm'
            : fs.DocumentDirectoryPath + '/home.realm');
        Realm.copyBundledRealmFiles();
        return (
            <Router />
        );
    }
}
export default App;
