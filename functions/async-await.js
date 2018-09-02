const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('not a number')
    }, 2000)
})

const processData = async () => {
    let data = await getDataPromise('abc')
    data = await getDataPromise(data)
    return data
}

processData().then(data => {
    console.log('data', data)
}).catch(err => {
    console.log("error", err);
})