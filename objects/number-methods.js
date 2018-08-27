let num = 1432.322;
console.log(num.toFixed(2));

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 20;
let max = 50;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum);

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum === guess
}

console.log(makeGuess(4))