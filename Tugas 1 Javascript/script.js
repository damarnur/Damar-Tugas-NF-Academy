// Persegi Panjang dengan parameter panjang dan lebar
function persegiPanjang(panjang, lebar) {
  // mengembalikan nilai luas persegi panjang dengan rumus panjang X lebar
  return panjang * lebar;
}

// Bujur Sangkar dengan parameter sisi
function bujurSangkar(sisi) {
  // Mengembalikan nilai dengan rumus luas dari bujur sangkar (sisi X sisi)
  return sisi * sisi;
}
// Segitiga dengan parameter alas dan tinggi
function segitiga(alas, tinggi) {
  // Mengembalikan nilai dari rumus luas segitiga (alas X tinggi / 2)
  return (alas * tinggi) / 2;
}

// Pemanggilan function untuk menghitung luas persegi panjang dengan argumen panjang = 50 dan lebar = 5
console.log(persegiPanjang(50, 5));

// Pemanggilan function untuk menghitung luas bujur sangkar dengan argumen setiap sisinya = 12
console.log(bujurSangkar(12));

// Pemanggilan function untuk menghitung luas segitiga dengan argumen alas = 10 dan tinggi = 5
console.log(segitiga(10, 5));
