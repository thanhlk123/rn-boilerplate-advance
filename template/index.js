import 'react-native-gesture-handler';
import {AppRegistry, Text, TextInput} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {
  allowFontScaling: false,
};

TextInput.defaultProps = TextInput.defaultProps || {
  allowFontScaling: false,
  autoCorrect: false,
  spellCheck: false,
};

AppRegistry.registerComponent(appName, () => App);
