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

import styles from './../../assets/styles/styles';

export default class ForYouCombination extends Component {
  addSelectedProduct(product){
    this.props.addSelectedProduct(product);
  }
  render() {
    let data = this.props.data;
    return (
      <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
        <Text style={styles.mediumTitle}>
          Combine with your {data.originalProduct.nombre.toLowerCase()}
        </Text>
        <View style={styles.combinationContainer}>
          <ScrollView style={styles.combinationOptionsContainer} horizontal={true}>
            <View style={styles.combinationOptionsDivider}></View>
            {
              data.combinations.map((combination, combinationKey) => (
                <View style={styles.productThumbContainer}>
                  <Image
                    resizeMode="cover"
                    source={{uri: combination.imagenes[0]}}
                    style={styles.productThumb} />
                  <View style={styles.productThumbPrice}>
                    <Text style={styles.productThumbPriceInt}>{combination.precio.toString().split(".")[0]}</Text>
                    <Text style={styles.productThumbPriceDecimal}>{"." + combination.precio.toString().split(".")[1] + "€"}</Text>
                  </View>
                  {!this.props.reservationFixed?
                    <TouchableOpacity style={styles.productThumbButtonContainer} onPress={() => {
                      this.addSelectedProduct(combination)
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
                    <Text style={styles.productThumbName}>{combination.nombre.toLowerCase()}</Text>
                  </BlurView>
                </View>
              ))
            }
          </ScrollView>
          <BlurView 
            blurType="light"
            blurAmount={10}
            style={styles.combinationOldProductContainer}>
            <View style={styles.productThumbContainer}>
              <Image
                resizeMode="cover"
                source={{uri: data.originalProduct.imagenes[0]}}
                style={styles.productThumb} />
            </View>
          </BlurView>
        </View>
      </LinearGradient>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => ForYouCombination);