/* 
Didalam Js Ada 3 urutan pencarian module
  1. Core Module
  2. Local Module
  3. Thirty part Module
*/

require("./test/satu.js")
const {
  negaraku,
  namaku
} = require("./app2.js")

console.log("ini baru masuk ke index.js")
console.log(negaraku("IIIndonesia"))
console.log(namaku("aadrian"))
/* Catatan Apabila menggunakan node import maupun reuqire masih belum bisa membaca arrow function dan harus menggunakan function biasa */