import axios from "axios";
const getUserDetail = async () => {
    try {
        let response = await axios.get('https://fakestoreapi.com/users/1');
        let user = {}
        user.email = response.data.email;
        user.username = response.data.username;
        return user;
    } catch (error) {
        throw error
    }
}
const login = ({ email, password }) => {

}
export default {
    getUserDetail,
    login
}