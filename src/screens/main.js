'use strict';

import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Day of quote
                </Text>
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
        width: Dimensions.get('window').width,
    },
    text:{
        fontSize:15,
        paddingBottom:200
    }

});