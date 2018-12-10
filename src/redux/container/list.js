'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, ScrollView,
    Text, FlatList,
    View, ActivityIndicator, Platform
} from 'react-native';
import DataItem from './sectionListItem';
import {allSchemas} from "../../database/allSchema";
import {SearchBar } from 'react-native-elements';
const Realm = require('realm');
import { setLoading } from '../actions/utilsAction';
import fs from "react-native-fs";

 class list extends Component {
     constructor(props) {
         super(props);
         this.state={
             query:"",
         };
         //binding
         this.searchChanged = this.searchChanged.bind(this);
     }

     componentWillMount() {
         const section = this.props.section;
         console.log(section+"done");
         Realm.open(allSchemas)
             .then(realm => {
                let list = realm.objects('Remedies');
                 let list_results = list.filtered(`id CONTAINS[c] "${section}"`);
                 console.log(list_results.length+'done');
                 realm.close();
             });
     }

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
                     keyExtractor={this._keyExtractor}
                     renderItem={({ item }) => (
                         <View style={{ flex: 1, flexDirection: "column" }}>
                             <Text style={styles.textView}>{item.id}</Text>
                             <Text style={styles.textView}>{item.location}</Text>
                         </View>
                     )}
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
},
    textView:{

    }

});


export default list;


