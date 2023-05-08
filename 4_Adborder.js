function addBorder(picture) {
    let wall = '*'.repeat(picture[0].length + 2)
    picture.unshift(wall) // add first
    picture.push(wall)

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*')
    }
    // console.log(wall)

    return picture
}


const t0 = performance.now();

console.log(addBorder(["abcd"]))

const t1 = performance.now();

console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);