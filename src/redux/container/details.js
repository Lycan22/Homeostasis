'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
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
        console.log(id+"receive");
            Realm.open(allSchemas).then(realm => {
                let list = realm.objects("Remedies").filtered(`id = "${id}"`);
                console.log(list.length);
                this.setState({
                    result: list
                });
            }).catch((error) => (error));

    }



    render() {
        return (
            <ScrollView style={{flex: 1}}>
               <Card
                    title={this.state.result.remedy}>
                    <Text style={styles.textTitle}>Comcomitants :
                        <Text style={styles.contextText}> {this.state.result.concomitants}</Text></Text>

                    <Text style={styles.textTitle}>Location :
                        <Text style={styles.contextText}> {this.state.result.location}</Text></Text>

                    <Text style={styles.textTitle}>Aetiology :
                        <Text style={styles.contextText}> {this.state.result.aetiology}</Text></Text>

                    <Text style={styles.textTitle}>Modalities :
                        <Text style={styles.contextText}>{this.state.result.modalities}</Text></Text>

                    <Text style={styles.textTitle}>Synopsis :
                        <Text style={styles.contextText}>{this.state.result.synopsis}</Text></Text>

                    <Text style={styles.textTitle}>Keynote :
                        <Text style={styles.contextText}>{this.state.result.keynote}</Text></Text>
                </Card>
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
