/* Sychonous akan menunggu waktu proses pertama selsesai baru bisa menyelesaikan proses kedua */
function makanan() {
  console.log(1 + 1)
}

function minuman() {
  console.log(20 * 70 * 100 * 60)
}

minuman();
makanan();