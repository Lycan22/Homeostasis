'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import Realm from "realm";
import {remSchemas} from "../../database/allSchema";
import * as Animatable from 'react-native-animatable';
import AwesomeButton from "react-native-really-awesome-button";

 class details extends Component {
    constructor(props) {
        super(props);
        this.state = {
           result:{},
        };
    }

    componentWillMount(){
        const id = this.props.data_id || 'No Data';
      //  console.log(id+"receive");
            Realm.open(remSchemas).then(realm => {
                let item = realm.objects("Remedies").filtered(`id = "${id}"`);
               // console.log(item.length);
                this.setState({
                    result: item
                });
            }).catch((error) => (error));

    }

     _renderItem = ({item}) => {
         return (
             <Card
                         title={item.remedy}>
                         <Text style={styles.textTitle}>Concomitants :</Text>
                             <Animatable.Text  Texttransition="fontSize"  style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                 {item.concomitants}</Animatable.Text>

                         <Text style={styles.textTitle}>Location :</Text>
                             <Animatable.Text  Texttransition="fontSize" style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                 {item.location}</Animatable.Text>

                         <Text style={styles.textTitle}>Aetiology :</Text>
                             <Animatable.Text  Texttransition="fontSize" style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                 {item.aetiology}</Animatable.Text>

                         <Text style={styles.textTitle}>Modalities :</Text>
                            <Animatable.Text  Texttransition="fontSize" style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                 {item.modalities}</Animatable.Text>

                         <Text style={styles.textTitle}>Synopsis :</Text>
                            <Animatable.Text  Texttransition="fontSize" style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                 {item.synopsis}</Animatable.Text>

                         <Text style={styles.textTitle}>Keynote :</Text>
                            <Animatable.Text  Texttransition="fontSize" style={{color: 'black',fontSize: this.state.fontSize || 12 }}>
                                {item.keynote}</Animatable.Text>
             </Card>

         )};


    render() {
        return (
            <View style={{flex: 1}}>
                <AwesomeButton  onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
                    <Text>+ 放大字體</Text>
                </AwesomeButton>
                <AwesomeButton  onPress={() => this.setState({fontSize: (this.state.fontSize || 10) - 5 })}>
                    <Text>- 縮細字體</Text>
                </AwesomeButton>
    <ScrollView>
                <FlatList
                    onEndReache={() => this.state.result.length}
                    data={ this.state.result}
                    extraData={this.state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this._renderItem}
                />
            </ScrollView>
        </View>

        );
    }
}


const styles = StyleSheet.create({
    textTitle:{
        fontFamily: 'Iowan Old Style',
        fontSize: 14,
        color: '#3783ba',
        fontWeight:'bold',
        marginBottom: 5
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});

export default details
