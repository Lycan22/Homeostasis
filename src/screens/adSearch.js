'use strict';

import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { Tooltip, Text } from 'react-native-elements';

class search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Tooltip
                    height={200}
                    width={200}
                    backgroundColor={'#BDFCC9'}
                    popover={<Text>
                        Keynote Searching: 堂上重點搜尋
                        Concomitants Searching: 伴症搜尋
                        Location Searching:位置搜尋
                        Aetiology Searching:成因搜尋
                        Modalities Searching:藥征搜尋
                        Constitutional Searching:體質搜尋
                    </Text>}>
                    <Text style={styles.popovers}>Hi, press me</Text>
                </Tooltip>
                <Text style={styles.textTitle}> </Text>
                <Button onPress={() =>{Actions.adResult({words: 'keynote'});}}>Keynote Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'concomitants'});}}>Concomitants Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'location'});}}>Location Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'aetiology'});}}>Aetiology Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'modalities'});}}>Modalities Searching</Button>
                <Button onPress={() =>{Actions.adResult({words: 'constitutional'});}}>Constitutional Searching</Button>
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
        fontSize: 30
    },
    popovers:{
        fontFamily: 'Iowan Old Style',
        fontSize: 18
    },


});


export default search
