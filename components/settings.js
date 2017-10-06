import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';

import styles from './../assets/styles/styles';

import friendsData from './../assets/data/friends';
import purchasesData from './../assets/data/purchases';

export default class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsData: friendsData,
      purchasesData: purchasesData
    };
  }
  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView style={styles.sectionsContainer}>
          <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
            <View style={styles.sectionLargeTitleContainer}>
              <Text style={styles.largeTitle}>Arancha Pérez</Text>
              <Text style={styles.smallTitle}>perezgarcia.aranzazu@gmail.com</Text>
              <Image
                resizeMode="cover"
                source={{uri: "https://pbs.twimg.com/profile_images/874706657430966274/fuAWrz11_400x400.jpg"}}
                style={styles.userAvatar} />
            </View>
            <Text style={styles.mediumTitle}>
              About
            </Text>
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfoRow}>
                <Text style={styles.userInfoTitle}>Height</Text>
                <Text style={styles.userInfoContent}>170 cm</Text>
              </View>
              <View style={styles.userInfoRow}>
                <Text style={styles.userInfoTitle}>Weight</Text>
                <Text style={styles.userInfoContent}>75 kg</Text>
              </View>
              <TouchableOpacity style={styles.solidButton}>
                <Text style={styles.solidButtonText}>Edit my data</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
            <Text style={styles.mediumTitle}>
              Recent Purchases
            </Text>
            <ScrollView style={styles.sectionInner} horizontal={true}>
              {
                this.state.purchasesData.map((purchase, purchaseKey) => (
                  <View style={styles.productThumbSmallContainer}>
                    <Image
                      resizeMode="cover"
                      source={{uri: purchase.imagenes[0]}}
                      style={styles.productThumbSmall} />
                    <View style={styles.productThumbPrice}>
                      <Text style={styles.productThumbPriceInt}>{purchase.precio.toString().split(".")[0]}</Text>
                      <Text style={styles.productThumbPriceDecimal}>{"." + purchase.precio.toString().split(".")[1] + "€"}</Text>
                    </View>
                    <BlurView 
                      blurType="light"
                      blurAmount={10}
                      style={styles.productThumbNameContainer}>
                      <Text style={styles.productThumbName}>{purchase.nombre.toLowerCase()}</Text>
                    </BlurView>
                  </View>
                ))
              }
            </ScrollView>
          </LinearGradient>
          <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
            <Text style={styles.mediumTitle}>
              Friends
            </Text>
            <View style={styles.sectionInner}>
              {
                this.state.friendsData.map((friend, friendKey) => (
                  <View style={styles.friendContainer}>
                    <Image
                      resizeMode="cover"
                      source={{uri: friend.avatar}}
                      style={styles.userAvatarLarge} />
                    <Text style={styles.friendName}>{friend.name}</Text>
                  </View>
                ))
              }
              <View style={styles.addFriendButtonContainer}>
                <TouchableOpacity style={styles.addFriendButton}>
                  <Text style={styles.addFriendButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => Settings);