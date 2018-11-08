'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, View,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {remedyDetails, selectRemedyDetails} from '../actions/remedyActions';
import { Card } from 'react-native-elements';
import PinchZoomView from 'react-native-pinch-zoom-view';


 class details extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const id = this.props.data || 'No Data';
        //console.log(id+"receive");
        this.props.getDetails(id);
    }


    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <PinchZoomView>
                <Card
                    title={this.props.remedy.remedy}>
                    <Text style={styles.textTitle}>Comcomitants :
                        <Text style={styles.contextText}> {this.props.remedy.concomitants}</Text></Text>

                    <Text style={styles.textTitle}>Location :
                        <Text style={styles.contextText}> {this.props.remedy.location}</Text></Text>

                    <Text style={styles.textTitle}>Aetiology :
                        <Text style={styles.contextText}> {this.props.remedy.aetiology}</Text></Text>

                    <Text style={styles.textTitle}>Modalities :
                        <Text style={styles.contextText}>{this.props.remedy.modalities}</Text></Text>

                    <Text style={styles.textTitle}>Synopsis :
                        <Text style={styles.contextText}>{this.props.remedy.synopsis}</Text></Text>

                    <Text style={styles.textTitle}>Keynote :
                        <Text style={styles.contextText}>{this.props.remedy.keynote}</Text></Text>
                </Card>
                </PinchZoomView>
            </ScrollView>

        );
    }
}

// "Redux States" -> Component props
const mapStateToProps = (state) => ({
    remedy: state.remedy.selectedRem
});

const mapDispatchToProps = dispatch => ({
    getDetails: (id) => dispatch(remedyDetails(id)),
    selectDetails:(id) =>dispatch(selectRemedyDetails(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(details)

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