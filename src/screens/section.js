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
                <Button onPress={() =>{Actions.list({section: 'S1'});}}>Section 1</Button>
                <Button onPress={() =>{Actions.list({section: 'S2'});}}>Section 2</Button>
                <Button onPress={() =>{Actions.list({section: 'S3'});}}>Section 5</Button>
                <Button onPress={() =>{Actions.list({section: 'S4'});}}>Section 6</Button>
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
