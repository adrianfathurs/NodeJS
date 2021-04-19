const fw = require("../app")
/* utf-8 mengubah bilangan buffur atau bisa dikatakan bilang ASCII menjadi String */
// const data = fw.fs.readFileSync('../data/message1.txt', 'utf-8'); 
/* console.log(data); */

/* Atau bisa dilakukan menggunakan parse toString */
const data = fw.fs.readFileSync('../data/message1.txt');
console.log(data.toString())