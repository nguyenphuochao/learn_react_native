import { Text, View } from "react-native";
import { user as UserRepository } from '../repositories'
import { useEffect, useState } from "react";
function Profile(props) {
    const [user, setUser] = useState({});
    // call when component loaded => componentDidMount
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(reponseUser => setUser(reponseUser))
    }, []);
    // UserReponsitory.getUserDetail()
    const { email , username} = user;
    return <View>

        <Text>Email: {email}</Text>
        <Text>Username : {username}</Text>
    </View>
}
export default Profile;