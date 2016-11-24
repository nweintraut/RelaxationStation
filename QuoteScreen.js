import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  RCTAnimation,
  LayoutAnimation
} from 'react-native';
import Quote from './quote';
const bgImage = require('./assets/pv.png');
import NextQuoteButton from './NextQuoteButton';
const tranquil = {
  duration: 500,
  create: {
    duration: 1000,
    delay: 300,
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  delete: {
    duration: 200,
    type: LayoutAnimation.Types.easeOut,
    property: LayoutAnimation.Properties.opacity,
  },
}

class QuoteScreen extends Component {
  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil)
  }
  render() {
    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.container}>
            <Quote key={this.props.qID} quoteText={this.props.text} quoteSource={this.props.source} />
            <NextQuoteButton onPress={this.props.onNextQuotePress} />
        </View>
      </Image>

    );
  }
}
QuoteScreen.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  onNextQuotePress: PropTypes.func.isRequired,
  qID: PropTypes.number.isRequired
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
