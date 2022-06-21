import axios from "axios";

const BASE_URL = "http://localhost:7777/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken; 
const TOKEN  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNjMwYzdkY2Q0NGJmYjc1MDg2MmJmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTgyNTUzOSwiZXhwIjoxNjU2MDg0NzM5fQ.5Fc0TwVVGsEz4lhejiwoGs3_kjcSn996LsUcrfpJzl4'
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
