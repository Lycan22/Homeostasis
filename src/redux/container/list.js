'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,
    Text,FlatList,
    View,ActivityIndicator
} from 'react-native';
import {querySection} from'../../database/allSchema'
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";
import Realm from 'realm';


 class list extends Component {

     componentWillMount(){
        const section= this.props.section;
        console.log(section+"done");
         querySection(section);

     }
     render() {
         return (
             <View style={styles.container}>
             </View>
         );
     };
 }


const styles = StyleSheet.create({
    loading: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
    },
    filterText:{
        borderColor: "#FF0000",
        color: "#FFF"
}
});

export default list;
