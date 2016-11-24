import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  RCTAnimation,
} from 'react-native';
import Quote from './quote'

class QuoteScreen extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Quote quoteText="Amazing Quote QuoteScreen!" quoteSource="- Great Source!" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
});

export default QuoteScreen
