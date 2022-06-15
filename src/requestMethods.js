import axios from "axios";

const BASE_URL = "http://localhost:7777/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken; 
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjMwYzdkY2Q0NGJmYjc1MDg2MmJmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTI5OTY2MiwiZXhwIjoxNjU1NTU4ODYyfQ.3LsLwjnOh3rNxFzB22yYWk94piCPpOIKyz0er3IH5HY"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
