import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { color } from "../../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
function FoodItem(props) {
    let { name, status, url, price, website, socialNetworks } = props.food; //destructuring an object
    const {onPress} = props;
    function _setColorFromStatus(status) {
        if (status.toLowerCase().trim() == 'opening soon') {
            return color.warning;
        } else if (status.toLowerCase().trim() == 'open now') {
            return color.success
        }
        return color.danger
    }
    return <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', padding: 5 }}>
        <Image style={{ width: 120, height: 100, marginRight: 10, borderRadius: 10 }} source={{ uri: url }}></Image>
        <View style={{ flex: 1 }}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>{name}</Text>
            <View style={{ backgroundColor: 'black', height: 1, width: '100%' }} />
            <View style={{ flexDirection: 'row' }}>
                <Text>Status:</Text>
                <Text style={{ color: _setColorFromStatus(status) }}> {status.toUpperCase()}</Text>
            </View>
            <Text>Price Range : {price} $</Text>
            <Text>FoodType: Pizza</Text>
            <Text>Website: {website}</Text>
            <View style={{ flexDirection: 'row' }}>
                {socialNetworks['facebook'] && <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'blue', padding: 5, borderRadius: 50 }} name="facebook" size={20}></Icon>}
                {socialNetworks['ins'] && <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'red', padding: 5, borderRadius: 50 }} name="instagram" size={20}></Icon>}
                {socialNetworks['twitter'] && <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'blue', padding: 5, borderRadius: 50 }} name="twitter" size={20}></Icon>}
            </View>
        </View>
    </TouchableOpacity>
}
export default FoodItem;