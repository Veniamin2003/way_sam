import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "43011506-f860-4a70-845b-74797985550d"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
}

