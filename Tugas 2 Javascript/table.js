// Data Pegawai
const pegawai = {
  nama: "Dodi Prayodi",
  umur: 25,
  jabatan: "Manajer",
  status: "Menikah",
};

// Gaji Pokok
let gajiPokok = 0;
if (pegawai.jabatan == "Manajer") {
  gajiPokok = 15000000;
} else if (pegawai.jabatan == "Asisten Manajer") {
  gajiPokok = 10000000;
} else if (pegawai.jabatan == "Staff") {
  gajiPokok = 5000000;
}

// Tunjangan Jabatan
let tunjanganJabatan = 0.15 * gajiPokok;

// Tunjangan BPJS
let bpjs = 0.1 * gajiPokok;

// Tunjangan Keluarga
let tunjanganKeluarga = pegawai.status == "Menikah" ? 0.2 * gajiPokok : 0;

// Gaji Total
let gajiTotal = gajiPokok + tunjanganJabatan + tunjanganKeluarga + bpjs;

// Melakukan DOM Manipulation
let employeeName = document.getElementsByClassName("emp-name");
let employeeAge = document.getElementsByClassName("emp-age");
let employeeMarital = document.getElementsByClassName("emp-marital");
let employeePosition = document.getElementsByClassName("emp-position");
let employeeSalary = document.getElementsByClassName("emp-salary");
let employeeBPJS = document.getElementsByClassName("emp-bpjs");
let employeePositionAllowance = document.getElementsByClassName(
  "emp-position-allowance"
);
let employeeFamilyAllowance = document.getElementsByClassName(
  "emp-family-allowance"
);

employeeName[0].innerHTML = pegawai.nama;
employeeAge[0].innerHTML = pegawai.umur;
employeeMarital[0].innerHTML = pegawai.status;
employeePosition[0].innerHTML = pegawai.jabatan;
employeeSalary[0].innerHTML = gajiPokok;
employeeBPJS[0].innerHTML = bpjs;
employeePositionAllowance[0].innerHTML = tunjanganJabatan;
employeeFamilyAllowance[0].innerHTML = tunjanganKeluarga;

const buttonTotalSalary = document.getElementById("calculateTotal");
let totalSalary = document.getElementById("total-salary");
document.addEventListener("click", function () {
  totalSalary.innerHTML = `Gaji Total dari ${pegawai.nama} adalah RP. ${gajiTotal}`;
});
