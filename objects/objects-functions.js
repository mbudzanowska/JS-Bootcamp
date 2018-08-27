let myBook = {
    title: '1984',
    author: 'Geogre Orwell',
    pageCount: 326,
}

let otherBook = {
    title: 'A Peoples Mistery',
    author: 'Someone',
    pageCount: 723,
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageContSummary: `${book.title} is ${book.pageCount} pages long`,
    }
}

console.log(getSummary(myBook))
console.log(getSummary(otherBook))

let getTemperature = function(farenheit) {
    return {
        farenheit: farenheit,
        celcius: (farenheit - 32) * 5 / 9,
        kelvin: (farenheit + 459.67) * 5 / 9,
    }
}

console.log(getTemperature(32))
