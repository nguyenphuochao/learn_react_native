/*
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add react-native-screens
*/
import * as React from 'react';
import {Settings , ProductGridView , FoodList} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
function UITab(props) {
    return <Tab.Navigator>
        <Tab.Screen name={ProductGridView} component={ProductGridView}/>
        <Tab.Screen name={FoodList} component={FoodList}/>
        <Tab.Screen name={Settings} component={Settings}/>
    </Tab.Navigator>
}
export default UITab;