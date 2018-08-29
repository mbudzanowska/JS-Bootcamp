const products = [{name: 'trololo'}]
const product = products[0]

// truthy = values that resolve to true in boolean context
// falsy = values that resolve to false in boolean context
// falsy values - false, 0, empty string, null, undefined, NaN
// truthy valuse - [], {}
const num = 0/0;
console.log(num)

if (num) {
    console.log('product found')
} else {
    console.log('product not found')
}