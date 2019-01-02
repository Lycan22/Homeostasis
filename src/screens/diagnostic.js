'use strict';

import React, { Component } from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export default class diagnostic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../icons/homeopathy_sym.png')}
                    style={styles.backgroundImage}>
                    <Text>
                        Process
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage:{
        flex : 1,
        width : '100%'
    }
});



