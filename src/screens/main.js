'use strict';

import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Realm from "realm";
import {quoSchemas} from '../database/allSchema';

let time = new Date().toLocaleString();

export default class main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes:{},
        };
    }

    componentWillMount() {
        Realm.open(quoSchemas).then(realm => {
            let quote = realm.objects("Quotes");
            console.log(quote.length);
            this.setState({
                quotes: quote
            });
        }).catch((error) => (error));
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {time}
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
