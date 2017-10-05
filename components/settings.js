import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';

import styles from './../assets/styles/styles';

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView style={styles.contentLeft}>
          <View style={styles.largeTitleContainer}>
            <Text style={styles.largeTitle}>SETTINGS</Text>
          </View>
        </ScrollView>
        <ScrollView style={styles.contentRight}>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => Settings);