import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS
} from 'react-native';

import MainView from './components/main-view';

export default class SmartCola extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <NavigatorIOS
        initialRoute={{
          component: MainView,
          title: 'MainView',
          navigationBarHidden: true
        }}
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => SmartCola);
