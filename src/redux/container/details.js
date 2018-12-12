'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-elements';

 class details extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        const id = this.props.data || 'No Data';
        console.log(id+"receive");
    }


    render() {
        return (
            <ScrollView style={{flex: 1}}>
               /** <Card
                    title={this.props.items.item.remedy}>
                    <Text style={styles.textTitle}>Comcomitants :
                        <Text style={styles.contextText}> {this.props.items.item.concomitants}</Text></Text>

                    <Text style={styles.textTitle}>Location :
                        <Text style={styles.contextText}> {this.props.items.item.location}</Text></Text>

                    <Text style={styles.textTitle}>Aetiology :
                        <Text style={styles.contextText}> {this.props.items.item.aetiology}</Text></Text>

                    <Text style={styles.textTitle}>Modalities :
                        <Text style={styles.contextText}>{this.props.items.item.modalities}</Text></Text>

                    <Text style={styles.textTitle}>Synopsis :
                        <Text style={styles.contextText}>{this.props.items.item.synopsis}</Text></Text>

                    <Text style={styles.textTitle}>Keynote :
                        <Text style={styles.contextText}>{this.props.items.item.keynote}</Text></Text>
                </Card>**/
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
