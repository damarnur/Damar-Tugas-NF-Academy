import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // url local dengan catatan harus running file laravel pertemuan sebelumnya + mysql
  // baseURL: "https://akmal-bc.karyakreasi.id/api", // url dari mentor
});

export default API;
