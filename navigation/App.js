import {Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen, Login, Register } from '../screens'
import UITab from './UITab';
const Stack = createNativeStackNavigator();
function App(props) {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={"MainScreen"} component={MainScreen} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Register"} component={Register} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;