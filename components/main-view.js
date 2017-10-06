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
      selectedTab: 'for-you',
      commentedProducts: [
        {
          "nombre": "LEVITA SOLAPA INVERTIDA",
          "precio": 49.95,
          "imagenes": [
            "https://static.zara.net/photos///2017/I/0/1/p/8024/293/401/2/w/1920/8024293401_1_1_1.jpg?ts=1506683262311",
            "https://static.zara.net/photos///2017/I/0/1/p/8024/293/401/2/w/1920/8024293401_2_1_1.jpg?ts=1506683217092"
          ],
          "categoria": "Formal",
          "tipo": "Abrigo",
          "points": 1,
          "liked_friends": [
            {
              "name": "Heda Weng",
              "avatar": "https://pbs.twimg.com/profile_images/633720977650765826/BCOoyslL_400x400.jpg"
            },
            {
              "name": "María López",
              "avatar": "https://pbs.twimg.com/profile_images/793012056278654976/9IHHMgjp_400x400.jpg"
            }
          ],
          "disliked_friends": [
            {
              "name": "David Mañanes",
              "avatar": "https://pbs.twimg.com/profile_images/3469464925/f2fe4f65e924b41090f0a64dfd610963_400x400.jpeg"
            },
          ]
        },
        {
          "nombre": "VESTIDO CRUZADO TERCIOPELO",
          "precio": 49.95,
          "imagenes": [
            "https://static.zara.net/photos///2017/I/0/1/p/0594/169/490/2/w/1920/0594169490_2_1_1.jpg?ts=1506532595009"
          ],
          "categoria": "Eventos",
          "tipo": "Vestido",
          "points": -3,
          "liked_friends": [
          ],
          "disliked_friends": [
            {
              "name": "David Mañanes",
              "avatar": "https://pbs.twimg.com/profile_images/3469464925/f2fe4f65e924b41090f0a64dfd610963_400x400.jpeg"
            },
            {
              "name": "Heda Weng",
              "avatar": "https://pbs.twimg.com/profile_images/633720977650765826/BCOoyslL_400x400.jpg"
            },
            {
              "name": "María López",
              "avatar": "https://pbs.twimg.com/profile_images/793012056278654976/9IHHMgjp_400x400.jpg"
            }
          ]
        },
      ],
      selectedProducts: [],
      reservation: null,
      reservationFixed: false
    };
  }

  addSelectedProduct(product){
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.push(product);
    this.setState({
      selectedProducts: selectedProducts
    })
  }

  removeCommentedProduct(productKey){
    let commentedProducts = this.state.commentedProducts;
    commentedProducts.splice(productKey, 1);
    this.setState({
      commentedProducts: commentedProducts
    })
  }

  removeSelectedProduct(productKey){
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.splice(productKey, 1);
    this.setState({
      selectedProducts: selectedProducts
    })
  }

  makeReservation(store){
    this.setState({
      reservation: store,
      reservationFixed: true
    });
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
          <Closet selectedProducts={this.state.selectedProducts} commentedProducts={this.state.commentedProducts}  removeSelectedProduct={this.removeSelectedProduct.bind(this)} removeCommentedProduct={this.removeCommentedProduct.bind(this)} makeReservation={this.makeReservation.bind(this)} reservationFixed={this.state.reservationFixed} reservation={this.state.reservation}/>
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
          <ForYou addSelectedProduct={this.addSelectedProduct.bind(this)} reservationFixed={this.state.reservationFixed}/>
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
          <Browse addSelectedProduct={this.addSelectedProduct.bind(this)} reservationFixed={this.state.reservationFixed}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Profile"
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