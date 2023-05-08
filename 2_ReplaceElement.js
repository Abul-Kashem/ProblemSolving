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

replaceArray([1, 2, 1], 1, 3)