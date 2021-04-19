const nama = "Adrian"
const umur = 25
const sayHeloo = (nama, umur) => {
  console.log(nama, umur)
}
const negara = "Indonesia"
console.log(sayHeloo(nama, umur));

function negaraku(negara) {
  return negara
}

function namaku(nama) {
  return negara
}

//cara mengeksport function function yang ada di file app2.js
module.exports = {
  negaraku,
  namaku
}