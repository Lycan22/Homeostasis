'use strict';

import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { Tooltip, Text } from 'react-native-elements';

class search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tooltip popover={<Text>Info here</Text>}>
                    <Text>Press me</Text>
                </Tooltip>
                <Text style={styles.textTitle}>Advance Searching for CLAMS </Text>
                <Button onPress={() =>{Actions.adResult({words: 'keynote'});}}>Keynote Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'concomitants'});}}>Concomitants Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'location'});}}>Location Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'aetiology'});}}>Aetiology Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'modalities'});}}>Modalities Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'constitutional'});}}>Constitutional Searching</Button>
            </View>
            );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    textTitle:{
        fontFamily: 'Iowan Old Style',
        fontSize: 16
    }
});


export default search
