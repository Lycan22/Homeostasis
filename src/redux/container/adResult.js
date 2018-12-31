'use strict';

import React, { Component } from 'react';
import {
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';
import {SearchBar } from 'react-native-elements';
import {Actions} from "react-native-router-flux";
import { Card} from 'react-native-elements';
import Realm from "realm";
import {allSchemas} from "../../database/allSchema";


class result extends Component {

    constructor(props) {
        super(props);
        this.state = {
            row:"",
            adData: [],
        };
    }

    componentWillMount(){
        this.timer = null;
        const row = this.props.words;
        this.setState({
            row:row
        });
    }

    makeSearch = (text) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            Realm.open(allSchemas).then(realm => {
                let result = realm.objects("Remedies").filtered(`${this.state.row} CONTAINS[c] "${text}"`);
                let array = Array.from(result);
                let col = array.map(items=>{return items[this.state.row]});
              //  console.log(array);
                this.setState({
                    adData: col
                });
                console.log('items'+col);
            }).catch((error) => (error));

        }, 1000);
    };

    _keyExtractor = (item, index) => index;


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
        return (
            <ScrollView style={{flex: 1}}>
                <SearchBar
                    round
                    lightTheme
                    onChangeText={text=>this.makeSearch(text)}
                    placeholder='請輸入關鍵字搜尋' />
                <FlatList
                    ListFooterComponent={ this.renderLoading.bind(this) }
                    ListHeaderComponent={()=>{
                        return <Text style={{color: '#3783ba', fontWeight:'bold', margin: 5}}>Result: {this.state.adData.length}</Text>
                    }}
                    data={this.state.adData}
                    keyExtractor={this._keyExtractor}
                    renderItem={ ({items}) => {
                        return (
                            <TouchableOpacity
                                onPress={()=>{
                                    Actions.details({data_id:items.id});
                                }}>
                                <Card
                                    title={items}>
                                    <Text style={styles.text}>
                                        {item}
                                    </Text>
                                </Card>
                            </TouchableOpacity>
                        )
                    }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        marginBottom: 10,
        fontFamily: 'sans-serif-medium',
        fontSize:18
    }

});

export default result
