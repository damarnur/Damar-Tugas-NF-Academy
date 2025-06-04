import axios from "axios";

// const url = "https://akmal-bc.karyakreasi.id"; // url dari mentor
const url = "http://127.0.0.1:8000"; // url local dengan catatan harus running file laravel pertemuan sebelumnya + mysql

export const API = axios.create({
  baseURL: `${url}/api`,
});

export const bookImageStorage = `${url}/storage`;
