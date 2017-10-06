import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './../assets/styles/styles';

import ForYouArticle from './for-you/article.js';
import ForYouCombination from './for-you/combination.js';

import combinationsData from './../assets/data/combinations';
import articles from './../assets/data/articles';

export default class ForYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      combinationsData: combinationsData,
      articles: articles
    };
  }

  render() {
    return (
      <View style={styles.contentContainer}>
        <ScrollView style={styles.sectionsContainer}>
          <LinearGradient colors={['#fafafa', '#eeeeee']} style={styles.section}>
            <View style={styles.sectionLargeTitleContainer}>
              <Text style={styles.smallTitle}>Friday, October 6</Text>
              <Text style={styles.largeTitle}>FOR YOU</Text>
            </View>
            <View style={styles.articlesContainer}>
              {
                this.state.articles.map((article, articleKey) => (
                  <ForYouArticle 
                    size={article.size} 
                    title={article.title}
                    subtitle={article.subtitle}
                    imageUrl={article.imageUrl}
                    story={article.story}
                    images={article.images}
                    relatedProducts={article.relatedProducts}
                    addSelectedProduct={this.props.addSelectedProduct}
                    reservationFixed={this.props.reservationFixed}/>
                ))
              }
            </View>
          </LinearGradient>
          {
            this.state.combinationsData.map((combination, combinationKey) => (
              <ForYouCombination data={combination} addSelectedProduct={this.props.addSelectedProduct} reservationFixed={this.props.reservationFixed}/>
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('SmartCola', () => ForYou);