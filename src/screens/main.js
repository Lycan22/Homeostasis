'use strict';

import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, Image,TouchableOpacity} from 'react-native';
import Realm from "realm";
import {quoSchemas} from '../database/allSchema';
import * as Animatable from 'react-native-animatable';

export default class main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote:{},
        };
    }

    componentWillMount() {
        Realm.open(quoSchemas).then(realm => {
            let quote = realm.objects("Quotes");
            let item = Array.from(quote);
            let randItem = item[Math.floor(Math.random()*item.length)];
            this.setState({
                quote: randItem
            });
        }).catch((error) => (error));
    }


    render() {
        return (
            <View style={styles.container}>
                <Animatable.Text animation="fadeIn" duration={5000} style={styles.text}>
                <Text>
                {this.state.quote.content}
                Author - {this.state.quote.author}
            </Text></Animatable.Text>
                <Image
                    source={require('../icons/plant.png')}>
                </Image>
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
        paddingBottom:Dimensions.get('window').height/2.5,
        width: Dimensions.get('window').width/1.2,
    },

});
