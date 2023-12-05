import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, Alert } from 'react-native';
import { UIButton } from '../components';
// component = function
function MainScreen(props) {
    // like getter/setter
    const [accountTypes, setAccountTypes] = useState([
        {
            id: 1,
            name: 'Influencer1',
            isSelected: true
        },
        {
            id: 2,
            name: 'Influencer2',
            isSelected: false
        },
        {
            id: 3,
            name: 'Influencer3',
            isSelected: false
        }
    ]);
    return <View style={{ backgroundColor: 'white', flex: 100 }}>
        <ImageBackground style={{ flex: 100 }} source={require('../assets/background.jpg')}>
            <View style={{ flexDirection: 'row', flex: 15, alignItems: 'center', height: 50 }}>
                <Image style={{ width: 30, height: 30, marginHorizontal: 10 }} source={require('../assets/fire.png')}></Image>
                <Text style={{ color: 'white' }}>BrightStar</Text>
                <View style={{ flex: 1 }} />
                <Image style={{ width: 20, height: 20, tintColor: 'white', marginEnd: 10 }} source={require('../assets/question.png')}></Image>
            </View>
            <View style={{ flex: 25, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ marginBottom: 10 }}>Welcome to</Text>
                <Text style={{ marginBottom: 10, fontSize: 20 }}>BrightStar.VN</Text>
                <Text>Please select your account type</Text>
            </View>
            <View style={{ flex: 45 }} >
                {/* TouchableOpacity */}
                {accountTypes.map(accountType =>
                    <UIButton key={accountType.id} onPress={() => {
                        let newAccountTypes = accountTypes.map(eachAccountType => {
                            return {
                                ...eachAccountType,
                                isSelected: eachAccountType.name == accountType.name
                            }
                        })
                        // Gán lại giá trị
                        setAccountTypes(newAccountTypes)
                    }}
                        title={accountType.name} isSelected={accountType.isSelected} />
                )}

            </View>

            <View style={{ flex: 15 }} >
                <UIButton title='LOGIN'></UIButton>
                <Text style={{ textAlign: 'center', color: 'white' }}>Don't know what account ty to use?</Text>
                <Text style={{ textAlign: 'center', color: 'white' }}>@copyright</Text>
            </View>
        </ImageBackground>
    </View>
}
export default MainScreen;