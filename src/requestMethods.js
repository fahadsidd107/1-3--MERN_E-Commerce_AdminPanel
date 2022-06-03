import axios from "axios";

const BASE_URL = "http://localhost:7777/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjMwYzdkY2Q0NGJmYjc1MDg2MmJmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ3NDU5MiwiZXhwIjoxNjUyNzMzNzkyfQ.kMpE4mPcHOQGxD2nTZFKNk39CHPFNhwskADg692uQ9s"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}
})