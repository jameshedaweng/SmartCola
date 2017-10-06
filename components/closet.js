import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';
import MapView from 'react-native-maps';

import ShopListItem from './closet/shop-list-item.js';

import styles from './../assets/styles/styles';

import stores from './../assets/data/stores';

export default class Closet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 40.416775,
        longitude: -3.703790,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05
      },
      userLocation: "40.416775,-3.703790",
      stores: stores
    };
  }

  componentWillMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let currentPosition = position.coords.latitude + "," + position.coords.longitude;
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        },
        userLocation: currentPosition
      });
      this.mapItem.animateToRegion(this.state.region, 400);
    });
  }

  _parseLatLng(coordinates) {
    let parsedCoordinates = coordinates.split(",");
    return {
      latitude: parseFloat(parsedCoordinates[0]),
      longitude: parseFloat(parsedCoordinates[1])
    }
  }

  removeCommentedProduct(productKey){
    this.props.removeCommentedProduct(productKey);
  }

  removeSelectedProduct(productKey){
    this.props.removeSelectedProduct(productKey);
  }

  getClosetCommentCardColor(points){
    if(points < 0){
      return '#E74C3C';
    }
    else if(points > 0){
      return '#1ABC9C';
    }
    else{
      return '#F39C12';
    }
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  storeCenterMap(location){
    this.mapItem.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02
    }, 400);
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView style={styles.contentLeftLarge}>
          <View style={styles.largeTitleContainer}>
            <Text style={styles.largeTitle}>CLOSET</Text>
          </View>
          {
            this.props.commentedProducts.length? 
            <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
              <Text style={styles.mediumTitle}>
                Friends have given opinions
              </Text>
              <View style={styles.closetLevel}>
              {
                this.props.commentedProducts.map((product, productKey) => (
                  <View style={styles.productThumbClosetCommentContainer}>
                    <Image
                      resizeMode="cover"
                      source={{uri: product.imagenes[0]}}
                      style={styles.productThumbCloset} />
                    <View style={styles.productThumbPrice}>
                      <Text style={styles.productThumbPriceInt}>{product.precio.toString().split(".")[0]}</Text>
                      <Text style={styles.productThumbPriceDecimal}>{"." + product.precio.toString().split(".")[1] + "€"}</Text>
                    </View>
                    {!this.props.reservationFixed?
                      <TouchableOpacity style={styles.productThumbButtonContainer} onPress={() => {
                        this.removeCommentedProduct(productKey)
                      }}>
                        <View style={styles.productThumbButtonRemove}>
                          <Text style={styles.productThumbButtonTextRemove}>✕</Text>
                        </View>
                      </TouchableOpacity>
                      : null
                    }
                    <BlurView 
                      blurType="light"
                      blurAmount={10}
                      style={styles.productThumbNameWithCommentContainer}>
                      <Text style={styles.productThumbName}>{product.nombre.toLowerCase()}</Text>
                    </BlurView>
                    <View style={[styles.closetCommentsContainer, {backgroundColor: this.getClosetCommentCardColor(product.points)}]}>
                      <Text style={styles.closetCommentsText}>{product.liked_friends.length} likes, {product.disliked_friends.length} dislikes</Text>
                    </View>
                  </View>
                ))
              }
              </View>
            </LinearGradient>
            :null
          }
          {
            this.props.selectedProducts.length? 
              <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
                <Text style={styles.mediumTitle}>
                  Recently added
                </Text>
                <View style={styles.closetLevel}>
                  {this.props.selectedProducts.map((product, productKey) => (
                    <View style={styles.productThumbClosetContainer}>
                      <Image
                        resizeMode="cover"
                        source={{uri: product.imagenes[0]}}
                        style={styles.productThumbCloset} />
                      <View style={styles.productThumbPrice}>
                        <Text style={styles.productThumbPriceInt}>{product.precio.toString().split(".")[0]}</Text>
                        <Text style={styles.productThumbPriceDecimal}>{"." + product.precio.toString().split(".")[1] + "€"}</Text>
                      </View>
                      {!this.props.reservationFixed?
                        <TouchableOpacity style={styles.productThumbButtonContainer} onPress={() => {
                          this.removeSelectedProduct(productKey)
                        }}>
                          <View style={styles.productThumbButtonRemove}>
                            <Text style={styles.productThumbButtonTextRemove}>✕</Text>
                          </View>
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
              </View>
            </LinearGradient>
            :null
          }
        </ScrollView>
        <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.contentRightSmallContainer}>
          {!this.props.reservationFixed?
            <View style={styles.contentRight}>
              <MapView
                initialRegion={this.state.region}
                onRegionChange={this.onRegionChange.bind(this)}
                style={[styles.mapView, {width: Dimensions.get('window').width / 3}]}
                ref={ref => { this.mapItem = ref; }}
              >
                <MapView.Marker
                  coordinate={this._parseLatLng(this.state.userLocation)}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <View style={styles.mapMarkerWrapper}>
                    <Image source={require('./../assets/images/marker-user.png')} style={{width: 20, height: 20}}/>
                  </View>
                </MapView.Marker>
                {
                  this.state.stores.map((store, storeKey) => (
                    <MapView.Marker
                      coordinate={store.location}
                      anchor={{ x: 0.5, y: 0.5 }}
                    >
                      <View style={styles.mapMarkerWrapper}>
                        <Image source={require('./../assets/images/marker-shop.png')} style={{width: 20, height: 20}}/>
                      </View>
                    </MapView.Marker>
                  ))
                }
              </MapView>
              <ScrollView style={[styles.shopListContainer, {width: Dimensions.get('window').width / 3, height: Dimensions.get('window').height - 250}]}>
                <Text style={styles.shopListTitle}>TRY IN STORE</Text>
                {
                  this.state.stores.map((store, storeKey) => (
                    <ShopListItem store={store} storeCenterMap={this.storeCenterMap.bind(this)} makeReservation={this.props.makeReservation}/>
                  ))
                }
                <View style={[styles.scrollViewPlaceholder, {width: Dimensions.get('window').width / 3 - 30}]}/>
              </ScrollView>
            </View>
          :
            <View style={styles.contentRight}>
              <MapView
                initialRegion={this.state.region}
                onRegionChange={this.onRegionChange.bind(this)}
                style={[styles.mapView, {width: Dimensions.get('window').width / 3}]}
                ref={ref => { this.mapItem = ref; }}
              >
                <MapView.Marker
                  coordinate={this._parseLatLng(this.state.userLocation)}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <View style={styles.mapMarkerWrapper}>
                    <Image source={require('./../assets/images/marker-user.png')} style={{width: 20, height: 20}}/>
                  </View>
                </MapView.Marker>
                <MapView.Marker
                  coordinate={this.props.reservation.location}
                  anchor={{ x: 0.5, y: 0.5 }}
                >
                  <View style={styles.mapMarkerWrapper}>
                    <Image source={require('./../assets/images/marker-shop.png')} style={{width: 20, height: 20}}/>
                  </View>
                </MapView.Marker>
              </MapView>
              <ScrollView style={[styles.shopListContainer, {width: Dimensions.get('window').width / 3, height: Dimensions.get('window').height - 250}]}>
                <Text style={styles.shopListTitle}>YOUR RESERVATION</Text>
                <View style={styles.shopListItem}>
                  <Text style={styles.shopListItemTitle}>Calle {this.props.reservation.address.street}, {this.props.reservation.address.number}</Text>
                  <Text style={styles.shopListItemSubtitle}>{this.props.reservation.address.zipCode} {this.props.reservation.address.city}</Text>
                  <View style={styles.shopListDateTime}>
                    <Text style={styles.shopListItemTime}>{this.props.reservation.recommendedDate}</Text>
                    <Text style={styles.shopListItemDate}>Today</Text>
                  </View>
                </View>
                <View style={styles.fittingRoom}>
                  <Text style={styles.shopListItemTitle}>Your Fitting Room</Text>
                  <Text style={styles.fittingRoomNumber}>5</Text>
                </View>
                <View style={[styles.scrollViewPlaceholder, {width: Dimensions.get('window').width / 3 - 30}]}/>
              </ScrollView>
            </View>
          }
        </LinearGradient>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => Closet);