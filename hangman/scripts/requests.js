const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('unable to fetch the puzzle')
    }
}
/* const getPuzzleOld = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then(response => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    });
} */

const getCountry = async (countryCode) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all", {})
    if (response.status === 200) {
        const data = await response.json()
        return data.filter(country => country.alpha2Code === countryCode)[0].name
    } else {
        throw new Error('unable to fetch the country name')
    }
}

const getLocation = async () => {
    const response = await fetch("http://ipinfo.io/json?token=40c7b4d9818865", {})
    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error("unable to fetch the location");
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}



/* new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', e => {data.
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.status === 400) {
            reject('An error has taken place')
        }
    })

    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send()
}) */