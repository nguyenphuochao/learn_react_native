import { Switch, Text, View } from "react-native";
import { fontSize } from "../contants";
import { UIHeader } from "../components";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
function Settings(props) {
    const [lockApp, setLockApp] = useState(true)
    const [finger, setFinger] = useState(false)
    const [password, setPassword] = useState(true)
    return <View>
        <UIHeader title="Setting UI" />
        <View style={{ height: 40, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', paddingStart: 5 }}>
            <Text style={{ fontSize: fontSize.h6 }}>Common</Text>
        </View>
        {/* Section */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="globe" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Language</Text>
            <View style={{ flex: 1 }} />
            <Text style={{ fontSize: fontSize.h5, paddingEnd: 10 }}>English</Text>
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="cloud" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Enviroment</Text>
            <View style={{ flex: 1 }} />
            <Text style={{ fontSize: fontSize.h5, paddingEnd: 10 }}>Production</Text>
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 40, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', paddingStart: 5 }}>
            <Text style={{ fontSize: fontSize.h6 }}>Account</Text>
        </View>
        {/* Section 2 */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="phone" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Phone Number</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="envelope" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Email</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="windows" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Sign out</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 40, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', paddingStart: 5 }}>
            <Text style={{ fontSize: fontSize.h6 }}>Sercurity</Text>
        </View>
        {/* Section 3 */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="lock" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Lock app in background</Text>
            <View style={{ flex: 1 }} />
            <Switch
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginEnd: 10 }}
                trackColor={{ false: 'grey', true: 'red' }}
                thumbColor={lockApp ? 'white' : 'grey'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={() => { setLockApp(!lockApp) }}
                value={lockApp}
            />
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="thumbs-up" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Use fingerprint</Text>
            <View style={{ flex: 1 }} />
            <Switch
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginEnd: 10 }}
                trackColor={{ false: 'grey', true: 'red' }}
                thumbColor={finger ? 'white' : 'grey'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={() => { setFinger(!finger) }}
                value={finger}
            />
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="lock" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Change Password</Text>
            <View style={{ flex: 1 }} />
            <Switch
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginEnd: 10 }}
                trackColor={{ false: 'grey', true: 'red' }}
                thumbColor={password ? 'white' : 'grey'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={() => { setPassword(!password) }}
                value={password}
            />
        </View>
        <View style={{ height: 40, backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', paddingStart: 5 }}>
            <Text style={{ fontSize: fontSize.h6 }}>Music</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="file" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Terms of Service</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
        <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.2)', marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="file" size={fontSize.h5} style={{ paddingStart: 10 }}></Icon>
            <Text style={{ fontSize: fontSize.h5, paddingStart: 10 }}>Open source licenses</Text>
            <View style={{ flex: 1 }} />
            <Icon name="chevron-right" size={fontSize.h5} style={{ paddingEnd: 10 }}></Icon>
        </View>
    </View>
}
export default Settings;