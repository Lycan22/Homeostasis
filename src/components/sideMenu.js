import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,  View,  ViewPropTypes } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from 'react-native-button';
import { CardSection } from './cardSection';
import { connect } from 'react-redux';

const contextTypes = {
  drawer: PropTypes.object
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: ViewPropTypes.style,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    padding: 15,
    height: 45,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  textStyle: {
    fontSize: 18,
    color: '#555',
  },
  nameContainer: {
    padding: 15,
    height: 45,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  name: {
    fontSize: 18,
    color: '#555',
    fontWeight: '300'
  }
});

class SideMenu extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.sceneStyle]}>
        <CardSection style={{ flexDirection: 'column', paddingTop: 50 }}>
          <View style={{flexDirection: 'row'}}>
            <Button
              containerStyle={styles.container}
              style={styles.name}
              onPress={() => { Actions.home(); }}>
              Home
            </Button>
          </View>
        </CardSection>
        <CardSection style={{ flexDirection: 'column', borderBottomWidth: 0 }}>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => { Actions.section();}}>
            Section
          </Button>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => Actions.search()}>
            Search
          </Button>
          <Button
            containerStyle={styles.container}
            style={styles.textStyle}
            onPress={() => Actions.diagnostic()}>
            Diagnostic
          </Button>
            <Button
                containerStyle={styles.container}
                style={styles.textStyle}
                onPress={() => Actions.caseStudy()}>
                Case Study
            </Button>
          <Button
              containerStyle={styles.container}
              style={styles.textStyle}
              onPress={() => Actions.about()}>
            About
          </Button>
        </CardSection>
      </View>
    );
  }
}

SideMenu.contextTypes = contextTypes;
SideMenu.propTypes = propTypes;

const mapStateToProps = ({ routes }) => ({ routes });
export default connect(mapStateToProps)(SideMenu);
