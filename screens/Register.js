import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function Register(props) {
    return <View style={{ backgroundColor: 'red', flex: 100 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, flex: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>{`Here's \nyour first \nstep width \nus!`}</Text>
            <Image tintColor={'red'} style={{ width: 130, height: 120, backgroundColor: 'white' }} source={require('../assets/laptop.png')}></Image>
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
        <View style={{ marginTop: 35, flex: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30 }}>
                <View style={{ height: 1, backgroundColor: 'white', flex: 1, marginHorizontal: 10 }}></View>
                <Text style={{ color: 'white' }}>Use order Methods</Text>
                <View style={{ height: 1, backgroundColor: 'white', flex: 1, marginHorizontal: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
                <Icon style={{ marginHorizontal: 5 }} name="facebook" size={30} color={'blue'} backgroundColor={'white'}></Icon>
                <Icon style={{ marginHorizontal: 5 }} name="google" size={30} color={'red'} backgroundColor={'white'}></Icon>
            </View>
        </View>
    </View>
}
export default Register;