import { Text, View } from "react-native";
import { fontSize } from "../contants";

function UIHeader(props) {
    const {title} = props;
    return <View style={{ backgroundColor: 'red', height: 60 }}>
        <Text style={{ color: 'white', fontSize: fontSize.h5, lineHeight: 55, textAlign: 'center' }}>{title}</Text>
    </View>
}
export default UIHeader;