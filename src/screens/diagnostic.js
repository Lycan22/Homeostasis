'use strict';

import React, { Component } from 'react';
import {View, Text, ImageBackground, StyleSheet,Dimensions} from 'react-native';

export default class diagnostic extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../icons/homeopathy_sym.png')}
                    style={styles.backgroundImage}>
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
        width : Dimensions.get('window').width,
        height:Dimensions.get('window').height*0.89,
    }
});



