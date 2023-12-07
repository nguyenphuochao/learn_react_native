import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { color } from "../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodListItem from '../FoodList/FoodListItem';
function FoodList(props) {
    const [foods, setFoods] = useState([
        {
            name: 'Pizza',
            status: 'COMMING SOON',
            url: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551783604684-AE2UE7DYUGV96DUT4G80/chup-anh-thuc-an-1.jpg',
            price: 4.56,
            website: 'http://shopee.vn',
            socialNetworks: [
                {
                    facebook: 'http://fb.com',
                    zalo: 'http://zalo'
                }
            ]
        },
        {
            name: 'Coffe',
            status: 'OPEN NOW',
            url: 'https://www.chuphinhsanpham.vn/wp-content/uploads/2016/04/chup-hinh-mon-an-dep-c-photo-0002.jpg',
            price: 4.56,
            website: 'http://lazada.vn',
            socialNetworks: [
                {
                    facebook: 'http://fb.com',
                    zalo: 'http://zalo',
                    ins: 'http://istagram.com'
                }
            ]
        }
    ]);
    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView>
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
            <FoodListItem />
        </ScrollView>
    </View>
}
export default FoodList;