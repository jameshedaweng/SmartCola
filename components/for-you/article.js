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
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from 'react-native-blur';

import styles from './../../assets/styles/styles';

export default class ForYouArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articleStyle: styles.articleContainerSmall,
      isModalVisible: false
    };
  }
  
  componentWillMount() {
    if (this.props.size == 'large'){
      this.setState({
        articleStyle: styles.articleContainerLarge
      })
    }
  }

  addSelectedProduct(product){
    this.props.addSelectedProduct(product);
  }

  showModal(){
    this.setState({isModalVisible: true});
  }

  hideModal(){
    this.setState({isModalVisible: false});
  }

  _renderButton(text, onPress) {
    return (
      <View>
        <TouchableOpacity onPress={onPress} style={styles.modalButton}>
          <Text style={styles.modalButtonText} >{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={[styles.articleContainer, this.state.articleStyle]}>
        <TouchableOpacity style={styles.articleWrapper} onPress={this.showModal.bind(this)}>
          <ScrollView style={styles.article} scrollEnabled={false}>
            <Image
              resizeMode="cover"
              source={{uri: this.props.imageUrl}}
              style={styles.articleBackground} />
            <View style={styles.articleTitleContainer}>
              <Text style={styles.articleTitle}>{this.props.title}</Text>
              <Text style={styles.articleSubtitle}>{this.props.subtitle}</Text>
            </View>
          </ScrollView>
        </TouchableOpacity>
        <Modal isVisible={this.state.isModalVisible} style={styles.modalContainer}>
          <ScrollView style={styles.modal}>
            <View style={styles.modalHeader}>
              <Image
                resizeMode="cover"
                source={{uri: this.props.imageUrl}}
                style={styles.articleBackground} />
              <View style={styles.modalHeaderTitleContainer}>
                <Text style={styles.articleTitle}>{this.props.title}</Text>
                <Text style={styles.articleSubtitle}>{this.props.subtitle}</Text>
              </View>
            </View>
            <View style={styles.modalContent}>
              {
                this.props.story.map((paragraph, paragraphKey) => (
                  <Text style={styles.modalParagraph}>
                    {paragraph}
                  </Text>
                ))
              }
            </View>
            <View style={styles.modalImages}>
              {
                this.props.images.map((image, imageKey) => (
                  <Image
                  resizeMode="cover"
                  source={{uri: image}}
                  style={styles.modalImage} />
                ))
              }
            </View>
            <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
              <Text style={styles.mediumTitle}>
                Get this collection
              </Text>
              <ScrollView style={styles.articleProductsContainer} horizontal={true}>
                {
                  this.props.relatedProducts.map((product, productKey) => (
                    <View style={styles.productThumbContainer}>
                      <Image
                        resizeMode="cover"
                        source={{uri: product.imagenes[0]}}
                        style={styles.productThumb} />
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
              </ScrollView>
            </LinearGradient>
          </ScrollView>
          {this._renderButton('Back', () => this.hideModal())}
        </Modal>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => ForYouArticle);