import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';



class  section extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Which Section do you looking for? </Text>
                <Button onPress={() =>{Actions.list({});}}>Section 1</Button>
                <Button onPress={() =>{Actions.list({});}}>Section 2</Button>
                <Button onPress={() =>{Actions.list({});}}>Section 5</Button>
                <Button onPress={() =>{Actions.list({});}}>Section 6</Button>
            </View>
        );
    };
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



export default section;
