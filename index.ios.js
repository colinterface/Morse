import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Output from './components/Output';

class Morse extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  textToMorse(text) {
    const morseAlphabet = {
      'a': '.-',
      'b': '-...',
      'c': '-.-.',
      'd': '-..',
      'e': '.',
      'f': '..-.',
      'g': '--.',
      'h': '....',
      'i': '..',
      'j': '.---',
      'k': '-.-',
      'l': '.-..',
      'm': '--',
      'n': '-.',
      'o': '---',
      'p': '.--.',
      'q': '--.-',
      'r': '.-.',
      's': '...',
      't': '-',
      'u': '..-',
      'v': '...-',
      'w': '.--',
      'x': '-..-',
      'y': '-.--',
      'z': '--..',
      '0': '-----',
      '1': '.----',
      '2': '..---',
      '3': '...--',
      '4': '....-',
      '5': '.....',
      '6': '-....',
      '7': '--...',
      '8': '---..',
      '9': '----.',
      ' ': '/',
      '.':	'.-.-.-',
      ',':	'--..--',
      ':':	'---...',
      '?':	'..--..',
      '\'':	'.----.',
      '-':	'-....-',
      '/':	'-..-.',
      '(':	'-.--.-',
      ')':	'-.--.-',
      '\"':	'.-..-.',
      '@':	'.--.-.',
      '=':	'-...-',
    };

    return text.split('').map((character, i, array) => {
      return morseAlphabet[character.toLowerCase()];
    }).join('');
  }

  render() {
    return (
      <View style={{
        flex: 1,
        marginTop: 20,
        backgroundColor: 'grey',
      }}>
        <TextInput
          style={{
            height: 40,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
            backgroundColor: 'white',
          }}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          clearButtonMode={'while-editing'}
        />
        <Text>{this.textToMorse(this.state.text)}</Text>
        <Output
          ditsPerMinute={100}
          encodedMorse={this.textToMorse(this.state.text)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Morse', () => Morse);
