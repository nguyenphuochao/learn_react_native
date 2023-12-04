import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// component = function
function MainScreen(props) {
    return <View style={{ backgroundColor: 'white', flex: 100 }}>
        <ImageBackground style={{ flex: 100 }} source={require('../assets/background.jpg')}>
            <View style={{ flexDirection: 'row', flex: 15, alignItems: 'center', height: 50, backgroundColor: 'red' }}>
                <Image style={{ width: 30, height: 30, marginHorizontal: 10 }} source={require('../assets/fire.png')}></Image>
                <Text style={{ color: 'white' }}>BrightStar</Text>
                <View style={{ flex: 1 }} />
                <Image style={{ width: 20, height: 20, tintColor: 'white', marginEnd: 10 }} source={require('../assets/question.png')}></Image>
            </View>
            <View style={{ flex: 25, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ marginBottom: 10 }}>Welcome to</Text>
                <Text style={{ marginBottom: 10, fontSize: 20 }}>BrightStar.VN</Text>
                <Text>Please select your account type</Text>
            </View>
            <View style={{ flex: 45, backgroundColor: 'blue' }} >
                <TouchableOpacity style={{ borderColor: 'white', borderRadius: 10, borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="check-circle" size={30} style={{color:'green',position:'absolute',left:10}} />
                    <Text style={{ color: 'white' }}>Influencer</Text>
                </TouchableOpacity>

            </View>
            <View style={{ flex: 15, backgroundColor: 'green' }} />
        </ImageBackground>
    </View>
}
export default MainScreen;