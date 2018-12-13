'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, ScrollView,
    Text, FlatList,
    View
} from 'react-native';
import {allSchemas} from "../../database/allSchema";
import {SearchBar } from 'react-native-elements';
import Realm from 'realm';
import DataItem from './sectionListItem';

 class list extends Component {

     constructor(props) {
         super(props);
         this.state = {
             query: "",
             data: [],
         };
         //binding
         this.searchChanged = this.searchChanged.bind(this);
     }

     componentWillMount() {
         const section = this.props.section;
         console.log(section + "done");
         Realm.open(allSchemas).then(realm => {
             let list = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
             console.log(list.length);
             this.setState({
                 data: list
             });
         }).catch((error) => (error));

     }


     _renderItem = (items) => {
         return (
             <DataItem items={items}/>);
     };


     searchChanged(text) {
         this.setState({query: text});
     }


     render() {
         let filteredLoads = this.state.data.filter(
             (text) => {
                 return(
                     text['remedy'].toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
                     || text['synopsis'].toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
                 )}
         );
         return (
             <ScrollView style={{flex: 1}}>
                 <SearchBar
                     round
                     showLoading
                     lightTheme
                     onChangeText={text => this.searchChanged(text)}
                     placeholder='Type Here...'/>
                 <FlatList
                     onEndReache={() => this.state.data.length}
                     data={ filteredLoads}
                     extraData={this.state}
                     keyExtractor={item => item.id.toString()}
                     renderItem={this._renderItem}
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


