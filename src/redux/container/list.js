'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,
    Text,FlatList,
    View,ActivityIndicator
} from 'react-native';
import realm,{querySection} from'../../database/allSchema'
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
         this.searchChanged = this.searchChanged.bind(this);

         this.reloadData();
         realm.addListener('change', () => {
             this.reloadData();
         });
     }


     reloadData = () => {
         const section= this.props.section;
         console.log(section+"done");
         querySection(section).then((list) => {
             this.setState({ list });
         }).catch((error) => {
             this.setState({ list: [] });
         });
         console.log(`reloadData`);
     };

     _renderItem = (listData)=> {
         return (
             <DataItem listData={listData}/>);
     };

     _keyExtractor = (item, index) => item.id;

     searchChanged(text) {
         this.setState({ query: text });
     }

     render() {
         return (
             <ScrollView style={{flex: 1}}>
                 <SearchBar
                     round
                     showLoading
                     lightTheme
                     onChangeText={text=>this.searchChanged(text)}
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
