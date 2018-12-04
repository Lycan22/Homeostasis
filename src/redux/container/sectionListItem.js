import React from 'react';
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
export default class sectionListItem extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static propTypes = {
    };

    render() {
        return (
            <View style={styles.container}>
                        <Card
                            containerStyle={{backgroundColor:'#F0FFF0'}}
                            title={this.props.listdata.list.remedy}>
                            <Text style={styles.text}>
                                {this.props.listdata.list.synopsis}
                            </Text>
                            <Button
                                raised
                                backgroundColor='#03A9F4'
                                onPress={() => Actions.details({data:this.props.listdata.list.id})}
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
