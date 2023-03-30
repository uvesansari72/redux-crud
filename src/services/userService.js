import axios from "axios";
const BASE_URL ="http://localhost:8000"

export const getAllUserListAPi = () =>{
    return axios.get(`${BASE_URL}/getUsers`)
}

export const createUserApi = (urlencoded) =>{
    return axios.post(`${BASE_URL}/createUser`, urlencoded)
}

export const updateUserApi = (urlencoded) =>{
    return axios.put(`${BASE_URL}/updateUser`,urlencoded)
}

export const deleteUserApi = (urlencoded) =>{
    return axios.delete(`${BASE_URL}/deleteUser/${urlencoded}`)
}