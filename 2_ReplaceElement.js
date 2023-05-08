// function arrayReplace(inputArray, elementToReplace, subtractionElem) {
//     inputArray.forEach((element, index) => {
//         if (element === elementToReplace) {
//             inputArray[index] = subtractionElem
//         }
//     })

//     console.log(inputArray)
// }


const replaceArray = function arrayReplace(inputArray, elementToReplace, subtractionElem) {
    inputArray.forEach((element, index) => {
        if (element === elementToReplace) {
            inputArray[index] = subtractionElem
        }
    })

    console.log(inputArray)
}


const t0 = performance.now();
replaceArray([1, 2, 1], 1, 3)
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);