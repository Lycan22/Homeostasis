'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';


 class details extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const id = this.props.data_id || 'No Data';
        console.log(id+"receive");
    }


    render() {
        return (null);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle:{
        fontFamily: 'Iowan Old Style',
        fontSize: 14,
        color: '#3783ba',
        fontWeight:'bold',
        marginBottom: 5
    },
    contextText:{
        fontSize: 12,
        color: 'black',

    }
});

export default details
