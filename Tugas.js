// let waktu = [2,2,3,3,1,4,5]
// let totalBermain = 0;
// let melebihi = 0 ;
// for(let i=0; i<=waktu.length; i++){
//     totalBermain += waktu[i]
// if (waktu[i]<2){
//     totalBermain++;
// }
// }
// console.log(`Total Waktu Bermain : ${totalBermain} Jam`)
// console.log(`Total Belebihi Batas Waktu : ${melebihi} Hari`)

let waktu = [2, 2, 3, 3, 1, 4, 5];
let total = 0;
let jumlahMelebihi = 0;

for (let i = 0; i < waktu.length; i++) {
  total += waktu[i];
  
  if (waktu[i] > 2) {
    jumlahMelebihi++;
  }
}

console.log(`Total waktu bermain game: ${total}`, "jam");
console.log("Jumlah melebihi batas waktu bermain:", jumlahMelebihi, "hari");