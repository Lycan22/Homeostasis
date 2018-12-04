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
     }

     componentWillMount(){
        const section= this.props.section;
        console.log(section+"done");
         this.data_source = querySection(section);
         console.log(this.data_source+"done")
     }

     _renderItem = (listdata)=> {
         return (
             <DataItem listdata={listdata}/>);

     };
     _keyExtractor = (item, index) => item.id;

     render() {
         return (
             <ScrollView style={{flex: 1}}>
                 <SearchBar
                     round
                     showLoading
                     lightTheme
                     placeholder='Type Here...' />
                 <FlatList
                     onEndReache={()=>this.props.data_source.length}
                     data={this.data_source}
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
