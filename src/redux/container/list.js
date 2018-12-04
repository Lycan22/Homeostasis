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
             list:[]
         };
         //binding
     }

     componentWillMount(){
        const section= this.props.section;
        console.log(section+"done");
         this.state.list = querySection(section);
         console.log(this.state.list+"done")
     }


     render() {
         return (
             <ScrollView style={{flex: 1}}>
                 <SearchBar
                     round
                     showLoading
                     lightTheme
                     placeholder='Type Here...' />
                 <FlatList
                     onEndReache={()=>this.state.list.length}
                     data={this.state.list}
                     renderItem={this._renderItem}
                     keyExtractor={this._keyExtractor}
                 />
             </ScrollView>
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
