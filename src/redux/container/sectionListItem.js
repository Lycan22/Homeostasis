import React, { Component }  from 'react';
import {
    StyleSheet,
    Text,
    View, Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-native-elements';

/**
 *
 */
export default class sectionListItem extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render() {
        return (
            <View style={styles.container}>
                        <Card
                            containerStyle={{backgroundColor:'#F0FFF0'}}
                            title='Remedy'
                            >
                            <Text style={styles.text}>
                                {this.props.data.remedy}
                                {this.props.data.synopsis}
                            </Text>
                            <Button
                                raised
                                backgroundColor='#03A9F4'
                                onPress={() =>{Actions.details({data_id:this.props.data.id})}}
                                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                                title='More detail' />
                        </Card>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,


    },
    text:{
        marginBottom: 10,
        fontFamily: 'sans-serif-medium',
        fontSize:18
    }

});
