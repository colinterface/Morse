import React, {
  View,
  TouchableOpacity,
  Component,
  Text,
  PropTypes,
} from 'react-native';

export default class Output extends Component {
  static propTypes = {
    ditsPerMinute: PropTypes.number.isRequired,
    encodedMorse: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      sound: false,
      light: false,
      vibration: false,
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ playing: !this.state.playing })
          }}
        >
          <Text>{'Play/Pause Output'}</Text>
        </TouchableOpacity>
        <Text>{this.state.playing ? 'playing' : 'not playing'}</Text>
      </View>
    );
  }
}
