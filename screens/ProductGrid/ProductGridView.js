import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import FiveStars from "./FiveStars";
const { View, FlatList, Text, Image, TouchableOpacity } = require("react-native");

function ProductGridView(props) {
    const [products, setProducts] = useState([
        {
            id: 1,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-m34-5g_1_2.png',
            productName: 'Samsung galaxy M34',
            price: 1.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 19,
            star: 1,
            isSave: false
        },
        {
            id: 2,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s23-ultra.png',
            productName: 'Samsung galaxy S22',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        },
        {
            id: 3,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-pro-max_3.png',
            productName: 'Iphone 15',
            price: 4.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 2,
            isSave: false
        },
        {
            id: 4,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/g/t/gtt_7766_3__1_5.jpg',
            productName: 'Xiaomi remi note 12',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        },
        {
            id: 5,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png',
            productName: 'Iphone 15',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        },
        {
            id: 6,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_1.png',
            productName: 'Iphone 14',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        },
        {
            id: 7,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_1.png',
            productName: 'Iphone X',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        },
        {
            id: 8,
            url: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:80/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-14_1.png',
            productName: 'Iphone 8',
            price: 2.03,
            specifications: [
                'thông số 1', 'thông số 2', 'thông số 3'
            ],
            reviews: 200,
            star: 5,
            isSave: false
        }

    ]);
    return <FlatList
        style={{ marginTop: 10 }}
        numColumns={2}
        data={products}
        renderItem={({ item, index }) => <View style={{
            flex: 0.5,
            marginLeft: index % 2 == 0 ? 10 : 0,
            marginTop: 5,
            marginBottom: 5,
            marginRight: 10,
            borderRadius: 20,
            borderWidth: 1

        }}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={{ width: 100, height: 100, borderRadius: 20 }} source={{ uri: item.url }}></Image>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>${item.price}</Text>
            </View>
            <Text style={{ fontSize: 15, padding: 5, color: 'blue' }}>{item.productName}</Text>
            {item.specifications.map(el => <Text key={el} style={{ marginStart: 5, color: 'black' }}>* {el}</Text>)}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => {
                    let clonedProducts = products.map(eachProduct => {
                        if (item.productName == eachProduct.productName)
                            return { ...eachProduct, isSave: eachProduct.isSave ==false || eachProduct.isSave == undefined ? true : false }
                        return eachProduct;
                    });
                    setProducts(clonedProducts);
                }} style={{ flexDirection: 'row', width: 50 }}>
                    <Icon color={item.isSave == true ? 'red' : 'grey'} name="heart" size={25}></Icon>
                    <Text style={{ fontSize: 13, color: item.isSave == true ? 'red' : 'grey' }}> Save for later</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <FiveStars numberOfStars={item.star}></FiveStars>
                </View>
            </View>
            <Text style={{ textAlign: 'right', marginEnd: 10 }}>{item.reviews} views</Text>
        </View>}
        keyExtractor={item => item.id}
    >
    </FlatList>
}
export default ProductGridView;