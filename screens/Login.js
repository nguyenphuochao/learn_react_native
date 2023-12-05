import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { isValidEmail, isValidPass } from '../utilies/Validations'
function Login(props) {
    const [keyboardIsDown, setkeyboardIsDown] = useState(false);
    // states for validate
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    // states store email/password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        // ComponentDivMount khi dữ liệu load thì chui vào đây
        Keyboard.addListener('keyboardDidShow', () => {
            setkeyboardIsDown(true)
        });
        Keyboard.addListener('keyboardDidHide', () => {
            setkeyboardIsDown(false)
        });
    })
    return <View style={{ backgroundColor: 'white', flex: 100, paddingTop: 50 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', flex: 30 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{`Already have an \nAccount?`}</Text>
            <Image style={{ width: 130, height: 120, tintColor: 'red' }} source={require('../assets/laptop.png')}></Image>
        </View>
        <View style={{ marginHorizontal: 10, flex: 30 }}>
            <Text style={{ color: 'red' }}>Email:</Text>
            <TextInput onChangeText={(text) => { setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format') }} placeholder='abc@gmail.com' placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%', marginBottom: 10 }}></View>
            <Text style={{ color: 'red' }}>{errorEmail}</Text>

            <Text style={{ color: 'red' }}>Password:</Text>
            <TextInput onChangeText={(text) => { setErrorPassword(isValidPass(text) == true ? '' : 'Password required on 3 characters') }} placeholder='Enter your password' secureTextEntry={true} placeholderTextColor={'grey'}></TextInput>
            <View style={{ backgroundColor: 'red', height: 1, width: '100%' }}></View>
            <Text style={{ color: 'red' }}>{errorPassword}</Text>
        </View>
        {keyboardIsDown == false && <View style={{ flex: 20 }}>
            <TouchableOpacity onPress={() => { alert('Login success') }} style={{ backgroundColor: 'red', borderColor: 'red', borderWidth: 1, borderRadius: 20, marginHorizontal: 100, alignItems: 'center', marginTop: 50 }}>
                <Text style={{ padding: 7, color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { alert('Press register') }}>
                <Text style={{ textAlign: 'center', color: 'red', marginTop: 10 }}>New user ? Register now</Text>
            </TouchableOpacity>
        </View>}
        <View style={{ flex: 20, marginTop: 35 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30 }}>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1, marginHorizontal: 10 }}></View>
                <Text>Use order Methods</Text>
                <View style={{ height: 1, backgroundColor: 'black', flex: 1, marginHorizontal: 10 }}></View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 10 }}>
                <Icon style={{ marginHorizontal: 5 }} name="facebook" size={30} color={'blue'}></Icon>
                <Icon style={{ marginHorizontal: 5 }} name="google" size={30} color={'red'}></Icon>
            </View>
        </View>
    </View>
}
export default Login;