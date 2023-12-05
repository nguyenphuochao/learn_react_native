import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
function Register(props) {
    return <KeyboardAwareScrollView style={{ backgroundColor: '#de4345', flex: 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, flex: 25 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{`Here's \nyour first \nstep width \nus!`}</Text>
            <Image tintColor={'white'} style={{ width: 130, height: 120}} source={require('../assets/laptop.png')}></Image>
        </View>
        <View style={{ marginHorizontal: 10, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 25, paddingTop: 10, flex: 60 }}>
            <Text style={{ color: 'red' }}>Name:</Text>
            <TextInput placeholder='kipai' placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%', marginBottom: 10 }}></View>

            <Text style={{ color: 'red' }}>Email:</Text>
            <TextInput placeholder='abc@gmail.com' placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%', marginBottom: 10 }}></View>

            <Text style={{ color: 'red' }}>Mobile:</Text>
            <TextInput placeholder='8129...' placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%', marginBottom: 10 }}></View>

            <Text style={{ color: 'red' }}>Password:</Text>
            <TextInput placeholder='Enter your password' secureTextEntry={true} placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%' }}></View>

            <TouchableOpacity onPress={() => { alert('Đã đăng kí') }} style={{ backgroundColor: 'red', paddingHorizontal: 30, alignItems: 'center', marginHorizontal: 80, borderRadius: 50, marginTop: 30, marginBottom: 30 }}>
                <Text style={{ color: 'white', paddingTop: 5, paddingBottom: 5 }}>Register</Text>
            </TouchableOpacity>
        </View>
        <View style={{ marginTop: 45, flex: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30 }}>
                <View style={{ height: 1, backgroundColor: 'white', flex: 1, marginHorizontal: 10 }}></View>
                <Text style={{ color: 'white' }}>Use order Methods</Text>
                <View style={{ height: 1, backgroundColor: 'white', flex: 1, marginHorizontal: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
                <Icon style={{ marginHorizontal: 5 }} name="facebook" size={30} color={'blue'}></Icon>
                <Icon style={{ marginHorizontal: 5 }} name="google" size={30} color={'red'}></Icon>
            </View>
        </View>
    </KeyboardAwareScrollView>
}
export default Register;