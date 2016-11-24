import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  RCTAnimation,
} from 'react-native';
import Quote from './quote'
const bgImage = require('./assets/pv.png');

class QuoteScreen extends Component {
  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Quote quoteText={this.props.text} quoteSource={this.props.source} />
        </View>
      </Image>

    );
  }
}
QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    width: undefined,
    height: undefined
  },
});

export default QuoteScreen
