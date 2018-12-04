'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,
    Text,FlatList,
    View,ActivityIndicator
} from 'react-native';
import {querySection} from'../../database/allSchema'
import DataItem from './sectionListItem';
import {SearchBar } from 'react-native-elements';
import { setLoading } from '../actions/utilsAction';



 class list extends Component {
     constructor(props) {
         super(props);
         this.state={
             query:"",
         };
         //binding
         this.searchChanged = this.searchChanged.bind(this);
     }

     componentWillMount(){
        const section= this.props.section;
        console.log(section+"done");
         querySection(section);
         this.props.setLoading(true);
     }

     _renderItem = (listdata)=> {
         return (
             <DataItem listdata={listdata}/>);
     };
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
