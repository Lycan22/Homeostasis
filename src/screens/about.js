'use strict';

import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text　style={styles.text}>本程式只用作學術交流及封測測試,並不會上架.
                    如對內容有疑問,請參考AHI Notes.所有資料以課程筆記為準
                    任何人未經著作者同意,不得進行任何發佈.如有發現,會即時關閉封測.
                    及知會持有copyright的相關人士.
                    謝謝同學們
                </Text>
                <Text style={styles.foot}>
                    本程式尚有部分正在建立中,如有興趣可聯絡小弟幫忙DataBase.
                </Text>
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
        width: Dimensions.get('window').width,
    },
    text:{
        fontSize:15,
        paddingBottom:Dimensions.get('window').height/2,
        width: Dimensions.get('window').width/1.2,
    },
    foot:{
        width: Dimensions.get('window').width/1.2,
    }

});
