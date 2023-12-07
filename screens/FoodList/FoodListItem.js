import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { color } from "../../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
function FoodListItem() {
    return <View style={{ flexDirection: 'row', padding: 5 }}>
            <Image style={{ width: 120, height: 100, marginRight: 10, borderRadius: 10 }} source={{ uri: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551783604684-AE2UE7DYUGV96DUT4G80/chup-anh-thuc-an-1.jpg' }}></Image>
            <View style={{ flex: 1 }}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>La Casa Pizza</Text>
                <View style={{ backgroundColor: 'black', height: 1, width: '100%' }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text>Status:</Text>
                    <Text style={{ color: color.warning }}> OPENING SOON</Text>
                </View>
                <Text>Price Range : $$</Text>
                <Text>FoodType: Pizza</Text>
                <Text>Website: http://shopee.vn</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'blue', padding: 5, borderRadius: 50 }} name="facebook" size={25}></Icon>
                    <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'red', padding: 5, borderRadius: 50 }} name="instagram" size={25}></Icon>
                    <Icon style={{ margin: 5, backgroundColor: 'grey', color: 'blue', padding: 5, borderRadius: 50 }} name="twitter" size={25}></Icon>
                </View>
            </View>
    </View>
}
export default FoodListItem;