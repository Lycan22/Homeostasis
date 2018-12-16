'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import Realm from "realm";
import {allSchemas} from "../../database/allSchema";

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
            Realm.open(allSchemas).then(realm => {
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
                         <Text style={styles.textTitle}>Concomitants :
                             <Text style={styles.contextText}> {item.concomitants}</Text></Text>

                         <Text style={styles.textTitle}>Location :
                             <Text style={styles.contextText}> {item.location}</Text></Text>

                         <Text style={styles.textTitle}>Aetiology :
                             <Text style={styles.contextText}> {item.aetiology}</Text></Text>

                         <Text style={styles.textTitle}>Modalities :
                             <Text style={styles.contextText}>{item.modalities}</Text></Text>

                         <Text style={styles.textTitle}>Synopsis :
                             <Text style={styles.contextText}>{item.synopsis}</Text></Text>

                         <Text style={styles.textTitle}>Keynote :
                             <Text style={styles.contextText}>{item.keynote}</Text></Text>
             </Card>

         )};


    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <FlatList
                    onEndReache={() => this.state.result.length}
                    data={ this.state.result}
                    extraData={this.state}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this._renderItem}
                />
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textTitle:{
        fontFamily: 'Iowan Old Style',
        fontSize: 14,
        color: '#3783ba',
        fontWeight:'bold',
        marginBottom: 5
    },
    contextText:{
        fontSize: 12,
        color: 'black',

    }
});

export default details
