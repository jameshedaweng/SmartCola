import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';

import styles from './../assets/styles/styles';

import productTypes from './../assets/data/types';
import casualProducts from './../assets/data/casual';
import formalProducts from './../assets/data/formal';
import eventProducts from './../assets/data/event';

export default class Browse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productTypes: productTypes,
      currentOccasion: 'casual',
      currentProducts: casualProducts
    };
  }

  addSelectedProduct(product){
    this.props.addSelectedProduct(product);
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView style={styles.contentLeft}>
          <LinearGradient colors={['#fafafa', '#eeeeee']}>
            <View style={styles.largeTitleContainer}>
              <Text style={styles.largeTitle}>BROWSE</Text>
            </View>
            <View style={styles.leftListContainer}>
              <View style={styles.leftListSection}>
                <Text style={styles.leftListSectionTitle}>Occasions</Text>
                <TouchableOpacity style={styles.leftListItem} onPress={() => {this.setState({currentProducts: casualProducts, currentOccasion: "casual"})}}>
                  <Text style={styles.leftListItemText}>Casual</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftListItem} onPress={() => {this.setState({currentProducts: formalProducts, currentOccasion: "formal"})}}>
                  <Text style={styles.leftListItemText}>Formal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftListItem} onPress={() => {this.setState({currentProducts: eventProducts, currentOccasion: "event"})}}>
                  <Text style={styles.leftListItemText}>Event</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.leftListSection}>
                <Text style={styles.leftListSectionTitle}>Type</Text>
                {
                  this.state.productTypes.map((type, typeKey) => (
                    <TouchableOpacity style={styles.leftListItem}>
                      <Text style={styles.leftListItemText}>{type}</Text>
                    </TouchableOpacity>
                  ))
                }
              </View>
            </View> 
          </LinearGradient>
        </ScrollView>
        <ScrollView style={styles.contentRightContainer}>
          <View style={styles.largeTitleCenterContainer}>
            <Text style={styles.largeTitleCenter}>{this.state.currentOccasion.toUpperCase()}</Text>
          </View>
          <View style={styles.contentRight}>
            {
              this.state.currentProducts.map((product, productKey) => (
                <View style={styles.productThumbSquareContainer}>
                  <Image
                    resizeMode="cover"
                    source={{uri: product.imagenes[0]}}
                    style={styles.productThumbSquare} />
                  <View style={styles.productThumbPrice}>
                    <Text style={styles.productThumbPriceInt}>{product.precio.toString().split(".")[0]}</Text>
                    <Text style={styles.productThumbPriceDecimal}>{"." + product.precio.toString().split(".")[1] + "€"}</Text>
                  </View>
                  {!this.props.reservationFixed?
                    <TouchableOpacity style={styles.productThumbButtonContainer} onPress={() => {
                      this.addSelectedProduct(product)
                    }}>
                      <BlurView 
                        blurType="light"
                        blurAmount={10}
                        style={styles.productThumbButton}>
                        <Text style={styles.productThumbButtonText}>+</Text>
                      </BlurView>
                    </TouchableOpacity>
                    : null
                  }
                  <BlurView 
                    blurType="light"
                    blurAmount={10}
                    style={styles.productThumbNameContainer}>
                    <Text style={styles.productThumbName}>{product.nombre.toLowerCase()}</Text>
                  </BlurView>
                </View>
              ))
            }
            <View style={styles.scrollViewPlaceholder}></View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => Browse);