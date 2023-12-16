/*
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add react-native-screens
*/
import * as React from 'react';
import { Settings, ProductGridView, FoodList, Profile } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'pink',
    tabBarIcon: ({focused,color,size}) =>{
        let screenName = route.name;
        let iconName = "facebook";
        if(screenName == "ProductGridView") {
            iconName ="windows"
        }else if(screenName == "FoodList"){
            iconName = "list";
        }else if(screenName == "Settings"){
            iconName = "gear";
        }else if(screenName == "Profile"){
            iconName = "user";
        }
        return <Icon name={iconName} size={20} color={focused ? 'pink' : 'grey'}>
        </Icon>
    }
});
function UITab(props) {
    return <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={"ProductGridView"} component={ProductGridView} options={{tabBarLabel : 'Products'}} />
        <Tab.Screen name={"FoodList"} component={FoodList} options={{tabBarLabel : 'Foods'}}/>
        <Tab.Screen name={"Settings"} component={Settings} />
        <Tab.Screen name={"Profile"} component={Profile} options={{tabBarLabel : 'Profile'}} />
    </Tab.Navigator>
}
export default UITab;