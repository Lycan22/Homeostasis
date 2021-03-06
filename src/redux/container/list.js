'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, ScrollView,
} from 'react-native';
import {remSchemas} from "../../database/allSchema";
import Realm from 'realm';
import DataItem from './sectionListItem';
import CompleteFlatList from 'react-native-complete-flatlist'
import * as Animatable from 'react-native-animatable';

 class list extends Component {

     constructor(props) {
         super(props);
         this.state = {
             query: "",
             data: [],
         };
         this.searchChanged = this.searchChanged.bind(this);
     }

     componentWillMount() {
         const section = this.props.section;
         console.log(section + "done");
         Realm.open(remSchemas).then(realm => {
             let list = realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`);
             //   console.log(list.length);
             this.setState({
                 data: list
             });
         }).catch((error) => (error));

     }


     cell = (data, index) => {
         const item = data.cleanData ? data.cleanData : data;
         return (<DataItem item={item}
                           data={data}/>);
     };

     searchChanged(text) {
         this.setState({query: text});
     }

     render() {
         let filteredLoads = this.state.data.filter(
             (text) => {
                 return (
                     text['remedy'].toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
                     || text['synopsis'].toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
                 )
             }
         );
         return (
             <ScrollView style={{flex: 1}}>
                 <CompleteFlatList
                     searchKey={['remedy', 'synopsis']}
                     placeholder='Type Here...'
                     highlightColor="yellow"
                     data={filteredLoads}
                     renderSeparator={null}
                     renderItem={this.cell}
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


