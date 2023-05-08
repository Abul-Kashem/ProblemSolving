// const sum = (param1, param2) => {
//     return param1 + param2
// }

// console.log(sum(2, 3))

const sum = (...params) => {
    let total = 0;
    params.forEach(singleElement => {
        total += singleElement
    })

    return total
}

console.log(sum(1, 2, 3,67,7))

