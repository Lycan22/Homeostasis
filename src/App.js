/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';

import React from 'react';
import Router from './Router';
import Realm from "realm";


class App extends React.Component {
    render() {
        Realm.copyBundledRealmFiles();
        return (
            <Router />
        );
    }
}
export default App;
    /**fs.unlink(Platform.OS === 'ios'
     ? fs.MainBundlePath + '/home.realm'
     : fs.DocumentDirectoryPath + '/home.realm');**/
