'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, ScrollView,
} from 'react-native';
import {allSchemas} from "../../database/allSchema";
import Realm from 'realm';
import DataItem from './sectionListItem';
import CompleteFlatList from 'react-native-complete-flatlist'

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
          //   console.log(list.length);
             this.setState({
                 data: list
             });
         }).catch((error) => (error));

     }


     cell = (data,index) => {
         const item = data.cleanData ? data.cleanData : data;

         console.log(data.cleanData);
         console.log('data.cleanData will be not null if search bar is not empty. caution, data without search is not same like data with search due to implement the highlight component. data.cleanData is equal to data')

         console.log('this is index number : '+index);

         console.log(item+' this is original data');

         return(<DataItem item={item} data={data}/>);
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


