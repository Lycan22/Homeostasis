import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {getSection,setSection} from '../redux/actions/remedyActions'


class  section extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Which Section do you looking for? </Text>
                <Button onPress={() =>{this.props.setSection('S1%%'); Actions.list({});}}>Section 1</Button>
                <Button onPress={() =>{this.props.setSection('S2%%'); Actions.list({});}}>Section 2</Button>
                <Button onPress={() =>{this.props.setSection('S5%%'); Actions.list({});}}>Section 5</Button>
                <Button onPress={() =>{this.props.setSection('S6%%'); Actions.list({});}}>Section 6</Button>
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
const mapStateToProps =(state) => ({
    setSection: state.remedy.section
});

/** dispatch actions */
const mapDispatchToProps = dispatch => ({
    loadSection: (section) => dispatch(getSection(section)),
    setSection: (section) => dispatch(setSection(section)),

});


export default connect(mapStateToProps,mapDispatchToProps)(section);