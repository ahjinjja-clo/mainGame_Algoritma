// let game = [
//     {
//         day:"Senin",
//         Time: 2
//     },{
//         day:"Selasa",
//         Time: 2
//     },{
//         day:"Rabu",
//         Time: 3
//     },{
//         day:"Kamis",
//         Time: 3
//     },{
//         day:"Jumat",
//         Time: 1
//     },{
//         day:"Sabtu",
//         Time: 4
//     },{
//         day:"Minggu",
//         Time: 5
//     }];
let game = [2,2,3,3,1,4,5]
let totalTime = 0;
let melebihiJam = 0;
for (i = 0; i < game.length; i++) {

        totalTime += game[i];

    if (game[i] > 2) {
        melebihiJam++;
    }
    
}
document.write("total jam: " + totalTime + "<br>");
document.write("total melebihi jam: " + melebihiJam);