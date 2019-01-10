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
import {remSchemas} from "../../database/allSchema";
import * as Animatable from 'react-native-animatable';


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
            Realm.open(remSchemas).then(realm => {
                let result = realm.objects("Remedies").filtered(`${this.state.row} CONTAINS[c] "${text}"`);
                let array = Array.from(result).slice(0,20);
                this.setState({
                    adData: array
                });
                console.log('items'+array);
            }).catch((error) => (error));
        }, 1000);
    };

    _keyExtractor = (item, index) => index.toString();

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
                <Animatable.View animation="lightSpeedIn" duration={500}>
                <SearchBar
                    round
                    lightTheme
                    onChangeText={text=>this.makeSearch(text)}
                    placeholder='請輸入關鍵字搜尋' />
                </Animatable.View>
                <FlatList
                    ListFooterComponent={ this.renderLoading.bind(this) }
                    ListHeaderComponent={()=>{
                        return <Text style={{color: '#3783ba', fontWeight:'bold', margin: 5}}>Result Limited 20: {this.state.adData.length}</Text>
                    }}
                    data={this.state.adData}
                    keyExtractor={this._keyExtractor}
                    renderItem={ ({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={()=>{
                                    Actions.details({data_id:item.id});
                                }}>
                                <Card
                                    title={item.remedy}>
                                    <Text style={styles.text}>
                                        {item[this.state.row]}
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
