import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function UIButton(props) {
    return <TouchableOpacity onPress={props.onPress} style={{ borderColor: 'white', borderRadius: 10, borderWidth: 1, height: 40, marginHorizontal: 10, marginVertical: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: props.isSelected == true ? 'white' : null }}>
        {props.isSelected == true && <Icon name="check-circle" size={30} style={{ color: 'green', position: 'absolute', left: 10 }} />}
        <Text style={{ color: 'black' }}>{props.title}</Text>
    </TouchableOpacity>
}
export default UIButton;