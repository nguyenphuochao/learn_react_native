/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MainScreen , Login, Register , FoodList , ProductGridView} from './screens';
AppRegistry.registerComponent(appName, () => () => <ProductGridView/>);
