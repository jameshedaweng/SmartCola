import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TabBarIOS
} from 'react-native';

import Closet from './closet';
import ForYou from './for-you';
import Browse from './browse';
import Settings from './settings';

import styles from './../assets/styles/styles';

export default class MainView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'for-you'
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <TabBarIOS
        unselectedTintColor="#777777"
        tintColor="#F39C12"
        translucent={true}>
        <TabBarIOS.Item
          title="Closet"
          icon={require('./../assets/images/closet.png')}
          selectedIcon={require('./../assets/images/closet-selected.png')}
          selected={this.state.selectedTab === 'closet'}
          onPress={() => {
            this.setState({
              selectedTab: 'closet',
            });
          }}>
          <Closet/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="For You"
          icon={require('../assets/images/for-you.png')}
          selectedIcon={require('../assets/images/for-you-selected.png')}
          selected={this.state.selectedTab === 'for-you'}
          onPress={() => {
            this.setState({
              selectedTab: 'for-you',
            });
          }}>
          <ForYou/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Browse"
          icon={require('../assets/images/browse.png')}
          selectedIcon={require('../assets/images/browse-selected.png')}
          selected={this.state.selectedTab === 'browse'}
          onPress={() => {
            this.setState({
              selectedTab: 'browse',
            });
          }}>
          <Browse/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={require('../assets/images/settings.png')}
          selectedIcon={require('../assets/images/settings-selected.png')}
          selected={this.state.selectedTab === 'settings'}
          onPress={() => {
            this.setState({
              selectedTab: 'settings',
            });
          }}>
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => MainView);