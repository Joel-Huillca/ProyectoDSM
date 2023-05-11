/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Bienvenida from './src/View/Bienvenida';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Bienvenida);
