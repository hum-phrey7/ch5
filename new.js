

const calcAverage = (a,b,c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas)

const checkWinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆🏆(${avgDolphins} vs. ${avgKoalas}) `)
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas 🏆🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else{
        console.log("No team wins...........");
    }
}


checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576,111);