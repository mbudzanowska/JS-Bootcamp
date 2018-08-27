let add = function (a, b, c, d) {
    return a + b;
}

let result = add(2, 3, 3)
console.log(result)


let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

let getTip = function (total, tipPercent = .2) {
    let result = total * tipPercent;
    return `A ${tipPercent*100}% tip on ${total} would be ${result}!`
}


console.log(getTip(100));
console.log(getTip(100, .25));


// template string
let name = 'Jen';
console.log(`Hey, my name is ${name}`);