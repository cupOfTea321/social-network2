import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY" : "85d7c869-f1ba-4ffd-b600-6dbc98885fc5"
    }

})
export const UsersAPI = {
    getUsers  (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowUsers (id) {
        return instance.delete(`/follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    followUsers (id) {
        return instance.post(`/follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
}


