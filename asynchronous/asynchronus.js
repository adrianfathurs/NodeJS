/* Asynchronous akan melaksanakan proses dan menampilkan hasil berdasarkan waktu tercepat pemrosesan */
function makan() {
  setTimeout(() => {

    console.log(70 * 90 * 1100)
  }, 2000);
}

function minum() {
  setTimeout(() => {
    console.log(20 * 10 * 30 * 70 * 90 * 1100)
  }, 100);
}
/* Walaupun proses makan dipanggil lebih duluan tetapi yang disajikan terlebih dahulu adalah proses minum dikarenakan
waktu proses minum lebih singkat dibanding proses makan
*/
makan();
minum();

async function olahraga() {
  await console.log(30 * 30 * 30);
}
async function istirahat() {
  await console.log(30 * 30)
}


function cek() {
  istirahat();
  olahraga()
}

cek();