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


class App extends React.Component {
    render() {
        Realm.copyBundledRealmFiles();
        return (
            <Router />
        );
    }
}
export default App;
