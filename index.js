/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {MainScreen , Login, Register , FoodList , ProductGridView , Settings} from './screens';
import UITab from './navigation/UITab';
import App from './navigation/App';
AppRegistry.registerComponent(appName, () => () => <App/>);
