import React, {Component, PropTypes} from 'react'
import { 
	View,
	Text,
	StyleSheet
} from 'react-native'

class Quote extends Component {
	render() {

		return (
			<View>
				<Text>{this.props.quoteText}</Text>
				<Text>{this.props.quoteSource}</Text>
			</View>
		)
	}
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequied
}
export default Quote