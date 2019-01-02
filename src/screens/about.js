'use strict';

import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View>
                <Text>本程式只用作學術交流,而且不會上架,只用作封測測試
                    如對內容有疑問,請參考AHI Note.所有資料以課程筆記為準
                    任何人未經著作者同意,不得進行任何發佈.如有發現,會即時關閉封測.
                    及知會有關人士.
                    謝謝
                </Text>
            </View>
        );
    }
}
