'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,
    Text,FlatList,
    View,ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
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
         this.props.loadSection();
         this.props.setLoading(true);
     }

     _renderItem = (listdata)=> {
         return (
             <DataItem listdata={listdata}/>);
     };

     _keyExtractor = (item, index) => item.id;

     searchChanged(text) {
         this.setState({ query: text });
     }

     // Loading spinner
     renderLoading() {
         if(!this.props.loading) {
             return null
         }
         return (
             <View style={styles.loading}>
                 <ActivityIndicator animating size="large" />
             </View>
         );
     }

     render() {
         let filteredLoads = this.props.remedy.filter(
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
                     onChangeText={text=>this.searchChanged(text)}
                     placeholder='Type Here...' />
                 <FlatList
                     ListFooterComponent={ this.renderLoading.bind(this) }
                     ListHeaderComponent={()=>{
                         return <Text style={{color: '#3783ba', fontWeight:'bold', margin: 5}}> {this.props.remedy.length}</Text>
                     }}
                     onEndReache={()=>this.props.getRemedyList(rows)}
                     data={filteredLoads}
                     renderItem={this._renderItem}
                     keyExtractor={this._keyExtractor}
                 />
             </ScrollView>
         )
    }
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
// "Redux States" -> Component props
const mapStateToProps = (state) => ({
   remedy: state.remedy.remedy
});


const mapDispatchToProps = dispatch => ({
    loadSection: (section) => dispatch(getSection(section)),
    getRemedyList:(rows)=>dispatch(getRemedyList(rows)),
    setLoading: (param) => dispatch(setLoading(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(list)
