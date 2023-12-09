import React, { useState } from "react";
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { color } from "../contants";
import Icon from 'react-native-vector-icons/FontAwesome';
import FoodItem from './FoodItem';
function FoodList(props) {
    const [foods, setFoods] = useState([
        {
            id: 1,
            name: 'Pizza',
            status: 'OPENING SOON',
            url: 'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551783604684-AE2UE7DYUGV96DUT4G80/chup-anh-thuc-an-1.jpg',
            price: 4.56,
            website: 'http://shopee.vn',
            socialNetworks:
            {
                facebook: 'http://fb.com',
                twitter: 'http://zalo'
            }
        },
        {
            id: 2,
            name: 'Coffe',
            status: 'OPEN NOW',
            url: 'https://www.chuphinhsanpham.vn/wp-content/uploads/2016/04/chup-hinh-mon-an-dep-c-photo-0002.jpg',
            price: 4.56,
            website: 'http://lazada.vn',
            socialNetworks:
            {
                facebook: 'http://fb.com',
                ins: 'http://istagram.com'
            }
        },
        {
            id: 3,
            name: 'Sanwich',
            status: 'CLOSING SOON',
            url: 'https://st.suckhoegiadinh.com.vn/staticFile/Subject/2019/11/28/fastfoodheartdiseasepic3_281322855.jpg',
            price: 6.56,
            website: 'http://tiki.vn',
            socialNetworks:
            {
                facebook: 'http://fb.com',
                twitter: 'http://zalo',
                ins: 'http://istagram.com'
            }
        },
        {
            id: 4,
            name: 'Thức ăn nhanh',
            status: 'OPEN NOW',
            url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/nhung_loai_thuc_pham_chua_nhieu_natri_2_e2446f0ade.jpg',
            price: 1.56,
            website: 'http://shoppefood.vn',
            socialNetworks:
            {
                facebook: 'http://fb.com',
                twitter: 'http://zalo',
                ins: 'http://istagram.com'
            }
        },
        {
            id: 5,
            name: 'Mì xào hải sản',
            status: 'OPEN NOW',
            url: 'https://cdn.tgdd.vn/2020/12/CookProduct/Thuc-an-nhanh-la-gi-tac-hai-cua-thuc-an-nhanh-va-cac-loai-tot-cho-suc-khoe-1-1200x676.jpg',
            price: 6.56,
            website: 'http://shoppefood.vn',
            socialNetworks:
            {
                facebook: 'http://fb.com',
                twitter: 'http://zalo',
                ins: 'http://istagram.com'
            }
        },
    ]);
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'BBQ',
            url: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg'
        },
        {
            id: 2,
            name: 'Breakfast',
            url: 'https://hips.hearstapps.com/hmg-prod/images/french-toast-1675106734.jpg?crop=0.6673469387755102xw:1xh;center,top&resize=980:*'
        },
        {
            id: 3,
            name: 'Coffee',
            url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg?quality=90&resize=500,454'
        },
        {
            id: 4,
            name: 'Hot dog',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png'
        },
        {
            id: 5,
            name: 'Nooddle',
            url: 'https://cdn.tgdd.vn/Files/2019/10/23/1211482/cac-loai-mi-tom-duoc-ua-chuong-nhat-viet-nam-202206041405267719.jpeg'
        },
        {
            id: 6,
            name: 'Seafood',
            url: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRj3rOzvaXrNCMwIS-3qKej3zW2XPKgCut3XGdZNYUyheoah2SxA456C4CVxBRoG5_rtN1EDko1ICDswNiCOv0'
        }
    ]);
    const [searchtext, setSearchText] = useState('');
    const filteredFoods = () => foods.filter(eachFood => eachFood.name.toLowerCase().includes(searchtext.toLowerCase()));
    return <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View style={{ height: 60, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <Icon style={{ position: 'absolute', top: 20, left: 15 }} name="search" size={20}></Icon>
            <TextInput onChangeText={(text) => { setSearchText(text) }} style={{ backgroundColor: 'grey', flex: 1, height: 40, borderRadius: 5, marginEnd: 5, opacity: 0.5, color: 'black', fontWeight: 'bold', paddingStart: 30 }}></TextInput>
            <Icon name="bars" size={30}></Icon>
        </View>
        <View style={{ height: 100 }}>
            <View style={{ height: 1, backgroundColor: 'black' }}></View>
            <FlatList
                horizontal
                data={categories}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => alert(`Bạn đã chọn ${item.name}`)} style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: item.url }}></Image>
                        <Text style={{ color: 'black', paddingTop: 5 }}>{item.name}</Text>
                    </TouchableOpacity>
                }}>
            </FlatList>
            <View style={{ height: 1, backgroundColor: 'black', marginBottom: 10 }}></View>
        </View>
        {/* <ScrollView>
            {
                foods.map(eachFood => <FoodListItem food={eachFood} />)
            }
        </ScrollView> */}
        {/* FlastList cuộn dọc */}
        {filteredFoods().length > 0 ? <FlatList
            data={filteredFoods()}
            renderItem={({ item }) => <FoodItem onPress={() => { alert(`Bạn đã chọn ${item.name}`) }} food={item} key={item.id} />}
            keyExtractor={eachFood => eachFood.name}
        /> : <View><Text>Food not found</Text></View>}
    </View>
}
export default FoodList;