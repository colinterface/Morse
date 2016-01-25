import React, {
  View,
  TouchableOpacity,
  Component,
  Text,
  PropTypes,
  NativeModules,
} from 'react-native';

const { RNControlFlashlight } = NativeModules;
const { turnFlashlight } = RNControlFlashlight;

export default class Output extends Component {
  static propTypes = {
    ditsPerMinute: PropTypes.number.isRequired,
    encodedMorse: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      soundEnabled: false,
      lightEnabled: false,
      vibrationEnabled: false,
      signal: false, // this is the actual morse signal
    };
  }

  switchFlaslight(boolean) {
    turnFlashlight(
      boolean ? 'flashlightOn' : 'flashlightOff',
      (result) => { console.warn(`error switching flashlight to ${boolean}: ${result.errMsg}`) },
      (result) => { console.log(result.successMsg) },
    )
  }

  pulseFlaslight(ms) {
    this.switchFlaslight(true);
    setTimeout(() => this.switchFlaslight(false), ms);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.state.playing ? this.switchFlaslight(false) : this.switchFlaslight(true);
            this.setState({ playing: !this.state.playing });
          }}
        >
          <Text>{'Play/Pause Output'}</Text>
        </TouchableOpacity>
        <Text>{this.state.playing ? 'playing' : 'not playing'}</Text>
        <View style={{
          height: 40,
          width: 40,
          backgroundColor: this.state.playing ? 'white' : 'black',
        }}
        />
      </View>
    );
  }
}
