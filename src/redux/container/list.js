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

 class list extends Component {
     constructor(props) {
         super(props);
         this.state={
             query:"",
             data:[],
         };
         //binding
         this.searchChanged = this.searchChanged.bind(this);
     }

     componentWillMount() {
         const section = this.props.section;
         console.log(section+"done");
         Realm.open(allSchemas)
             .then(realm => {this.setState({
                 data: realm.objects("Remedies").filtered(`id CONTAINS[c] "${section}"`),
             });
                 //realm.close();
                 console.log(data.length)

             });
     }


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
                     onEndReache={()=>this.state.data.length}
                     data={this.state.data}
                     keyExtractor={item => item.id.toString()}
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


