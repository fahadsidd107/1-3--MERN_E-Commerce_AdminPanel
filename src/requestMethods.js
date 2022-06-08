import axios from "axios";

const BASE_URL = "http://localhost:7777/api/"
const TOKEN = ""

console.log((JSON.parse(localStorage.getItem("persist:root")).user))

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})