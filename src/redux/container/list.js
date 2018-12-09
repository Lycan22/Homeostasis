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
import {connect} from 'react-redux';



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
         this.props.querySection(section);

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
                             <Text style={styles.textView}>{item[0].id}</Text>
                             <Text style={styles.textView}>{item[1].location}</Text>
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
const mapStateToProps = (state) => ({
    remedy: state.remedy.remedy
});


const mapDispatchToProps = dispatch => ({
    querySection: (section) => dispatch(querySection(section)),
    setLoading: (param) => dispatch(setLoading(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(list)


