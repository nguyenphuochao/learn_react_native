import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
function FiveStars(props) {
    const {numberOfStars} = props;
    return [0, 1, 2, 3, 4].map(item => 
    <Icon name="star" key={item} color={item <= numberOfStars - 1 ? 'yellow' : 'grey'}></Icon>)
}
export default FiveStars;