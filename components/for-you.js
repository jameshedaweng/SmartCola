import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './../assets/styles/styles';

export default class ForYou extends Component {
  render() {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.sectionsContainer}>
          <LinearGradient colors={['#fafafa', '#cccccc']} style={styles.section}>
            <View style={styles.sectionLargeTitleContainer}>
              <Text style={styles.smallTitle}>Friday, October 6</Text>
              <Text style={styles.largeTitle}>FOR YOU</Text>
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => ForYou);