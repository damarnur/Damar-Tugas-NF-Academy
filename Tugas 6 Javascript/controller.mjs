import { biodata as data } from "./data.mjs";

// Menampilkan data
const index = () => {
  data.map(({ name, age, address, email }) => {
    console.log(
      `Nama: ${name}, Umur: ${age}, Alamat: ${address}, Email: ${email}`
    );
  });
};

// Menambahkan data
const store = (user) => {
  data.push(user);
  console.log("Data berhasil ditambahkan:", user);
};

// Menghapus data yang dipilih
const destroy = (indeks) => {
  if (indeks >= 0 && indeks < data.length) {
    data.splice(indeks, 1);
    console.log("Data Berhasil dihapus");
  } else {
    console.log("Data tidak ditemukan");
  }
};

export { index, store, destroy };
