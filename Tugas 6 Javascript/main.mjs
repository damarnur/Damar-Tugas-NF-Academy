import { index, store, destroy } from "./controller.mjs";

const main = () => {
  store({
    name: "Lina Maharani",
    age: 26,
    address: "Jl. Kenari No. 9, Yogyakarta",
    email: "lina.maharani@email.com",
  });
  console.log(" ");

  store({
    name: "Miko Hidayat",
    age: 24,
    address: "Jl. Pemuda No. 22, Semarang",
    email: "miko.hidayat@email.com",
  });
  console.log(" ");

  store({
    name: "Nadia Anjani",
    age: 27,
    address: "Jl. Cendana No. 11, Makassar",
    email: "nadia.anjani@email.com",
  });
  console.log(" ");

  store({
    name: "Oscar Pranata",
    age: 30,
    address: "Jl. Melati No. 8, Bali",
    email: "oscar.pranata@email.com",
  });
  console.log(" ");

  store({
    name: "Putri Anggraini",
    age: 23,
    address: "Jl. Mawar No. 5, Surabaya",
    email: "putri.anggraini@email.com",
  });
  console.log(" ");

  index();
  console.log(" ");

  destroy(5);
  console.log(" ");

  index();
  console.log(" ");
};

main();
