'use strict';

import React, { Component } from 'react';
import {StyleSheet, Text, Dimensions,TouchableOpacity,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import {setAdvKey,advSearch} from'../redux/actions/searchAction';

class search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Advance Searching for CLAMS </Text>
                <Button
                onPress={() => {
                        this.props.setAdvKey("keynote");
                        Actions.adResult({});}}>Keynote Searching</Button>
                <Button
                    onPress={() => {
                        this.props.setAdvKey("concomitants");
                        Actions.adResult({});}}>Concomitants Searching</Button>
                <Button
                    onPress={() => {
                        this.props.setAdvKey("location");
                        Actions.adResult({});}}>Location Searching</Button>
                <Button
                    onPress={() => {
                        this.props.setAdvKey("aetiology");
                        Actions.adResult({});}}>Aetiology Searching</Button>
                <Button
                    onPress={() => {
                        this.props.setAdvKey("modalities");
                        Actions.adResult({});}}>Modalities Searching</Button>
                <Button
                    onPress={() => {
                        this.props.setAdvKey("constitutional");
                        Actions.adResult({});}}>Constitutional Searching</Button>
            </View>
            );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    textTitle:{
        fontFamily: 'Iowan Old Style',
        fontSize: 16
    }
});

const mapStateToProps = (state) => ({
    setAdvKey: state.search.setAdvKey
});

/** dispatch actions */
const mapDispatchToProps = dispatch => ({
    setAdvKey: (advKey) => dispatch(setAdvKey(advKey)),
    loadSearch:(advkey) => dispatch(advSearch(advkey)),

});

export default connect(mapStateToProps, mapDispatchToProps)(search)