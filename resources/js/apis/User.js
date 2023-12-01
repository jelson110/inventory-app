import axios from "axios";

export default {
    getUsers(payload) {
        return axios.post('/users', payload)
    },
    getCurrentUser() {
        return axios.post('/auth/user')
    }
}
