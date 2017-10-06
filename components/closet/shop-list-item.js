import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';

import styles from './../../assets/styles/styles';

export default class ShopListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reserveButtonVisible: false
    };
  }
  storeCenterMap(location){
    this.props.storeCenterMap(location);
    this.setState({
      reserveButtonVisible: true
    });
  }

  makeReservation(store){
    this.props.makeReservation(store);
  }
  render() {
    let store = this.props.store;
    return (
      <TouchableOpacity onPress={() => {this.storeCenterMap(store.location)}}>
        <View style={styles.shopListItem}>
          <Text style={styles.shopListItemTitle}>Calle {store.address.street}, {store.address.number}</Text>
          <Text style={styles.shopListItemSubtitle}>{store.address.zipCode} {store.address.city}</Text>
          <View style={styles.shopListDateTime}>
            <Text style={styles.shopListItemTime}>{store.recommendedDate}</Text>
            <Text style={styles.shopListItemDate}>Today</Text>
          </View>
          { this.state.reserveButtonVisible?
            <TouchableOpacity style={styles.shopListItemButton} onPress={() => {this.makeReservation(store)}}>
              <Text style={styles.solidButtonText}>Try in this store</Text>
            </TouchableOpacity>
            : null
          }
        </View>
      </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => ShopListItem);