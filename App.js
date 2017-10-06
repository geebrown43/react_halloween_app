/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  _pressureButton() {
    Alert.alert('HAPPPPPY HALLLOWWEEEENN')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Happy Halloween!
        </Text>
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonStyle} onPress={this._pressureButton} title="Enter if You Dare" />
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    marginTop: -200,
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Nosifer', 
    color: 'orange'
  },
  buttonContainer: {
    margin: 40,
    width: 200,
    backgroundColor: 'orange',
    borderStyle: 'solid',
    borderRadius: 20,
    
  },
  buttonStyle: {
    color: 'orange'
  }
  
});
