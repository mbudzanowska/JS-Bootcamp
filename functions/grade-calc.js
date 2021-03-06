let gradeCalc = function (score, totalScore = 100) {

    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('only numbers')
    } 
    
    let percent = (score / totalScore) * 100
    if(percent >= 90) {
        return `You got a A (${percent})!`
    } else if(percent >= 80) {
        return `You got a B (${percent})!`
    } else if(percent >= 70) {
        return `You got a C (${percent})!`
    } else if(percent >= 60) {
        return `You got a D (${percent})!`
    } else {
        return `You got a F (${percent})!`
    }

}
try {
    console.log(gradeCalc(10,10));
    console.log(gradeCalc(56));
    console.log(gradeCalc(64));
    console.log(gradeCalc(75, false));
    console.log(gradeCalc(false));
    console.log(gradeCalc(95,120));
    console.log(gradeCalc(100));
} catch(e) {
    console.log(e.message);
}
