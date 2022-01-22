//------------------------------------Reduce method ---------------------------------

Array.prototype.myReduce = function(callback, result) {
    let i = 0;
    if (arguments.length < 2){
        i = 1;
        result = this[0]
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }

    return result;
}

let arrNumber = [1, 2, 3, 4, 5]

let totalNumber = arrNumber.myReduce(function(accumulator, currentValue, index, array) {
    console.log(accumulator, currentValue, index, array)
    return accumulator + currentValue
})

console.log(totalNumber)

// ----------------------------------Map method---------------------------------------

let courses = [
	{
		id: 1,
		languages: "Javascript",
		coin: 250,
	},
	{
		id: 2,
		languages: "HTML",
		coin: 100,
	},
	{
		id: 3,
		languages: "CSS",
		coin: 0,
	},
	{
		id: 4,
		languages: "PHP",
		coin: 50,
	},
	{
		id: 5,
		languages: "CSS",
		coin: 150,
	},
	{
		id: 6,
		languages: "Typescript",
		coin: 30,
	},
];

Array.prototype.myMap = function(callback) {
    let arr = []
    for (let i in this) {
        if (this.hasOwnProperty(i)) { //Kiểm tra xem có lặp đến key trong prototype hay không
            let result = callback(this[i], i)
            arr.push(result)
        }
    }

    return arr;
}

let newArrMyMap = courses.myMap(function(course, index) {
    return {
        id: course.id,
        languages: `Khóa học ${course.languages}`,
        coin: course.coin,
        coinTex: `Giá Khóa học: ${course.coin}`,
    }
})

let newArrMyMap1 = courses.myMap(function(course, index) {
    return `
        <h1>id: ${course.id}</h1>
        <h1>languages: ${course.languages}</h1>
        <h1>coin:  ${course.coin}</h1>
        <h1>coinText: Giá ${course.coin}</h1>
    `
})

// let newArrMap = courses.map(function(course, index) {
//     return {
//         id: course.id,
//         languages: `Khóa học ${course.languages}`,
//         coin: course.coin,
//         coinTex: `Giá Khóa học: ${course.coin}`,
//     }
// })

// let newArrMap1 = courses.map(function(course, index) {
//     return `
//         <h1>id: ${course.id}</h1>
//         <h1>languages: ${course.languages}</h1>
//         <h1>coin:  ${course.coin}</h1>
//         <h1>coinText: Giá ${course.coin}</h1>
//     `
// })

console.log(newArrMyMap)
// console.log(newArrMap)
console.log(newArrMyMap1.join(''))
// console.log(newArrMap1.join(''))

// -------------------------------MyforEach---------------------------
Array.prototype.MyforEach = function(callback) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) { //Kiểm tra xem có lặp đến key trong prototype hay không
            callback(this[i], i, this)
        }
    }

}

courses.MyforEach(function(course, index, arr) {
    console.log(index, course, arr)
})

// courses.forEach(function(course, index, arr) {
//     console.log(index, course)
// })

// ----------------------------MyEvery-----------------------------------

Array.prototype.MyEvery = function (callback) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            if (!callback(this[i], i)) {
                return false;
            }
        }
    }
    return true
}

console.log(courses.MyEvery(function(course, index) {
    return course.coin === 0
}))

// -------------------------MySome---------------------------------------
Array.prototype.MySome = function(callback) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i)) {
                return true
            }
        }
    }
    return false
}

console.log(courses.MySome(function(course, index) {
    return course.coin === 0
}))

// ---------------------MyFind--------------------------------------------
Array.prototype.MyFind = function(callback) {
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            let result = callback(this[i], i) 
            if (result) {
                return this[i]
            }
        }
    }
    return undefined
}

console.log(courses.MyFind(function(course, index) {
    return course.languages === 'CSS'
}))

// -------------------MyFilter--------------------------------
Array.prototype.MyFilter = function(callback) {
    let arr = []
    for (let i in this) {
        if (this.hasOwnProperty(i)) {
            let result = callback(this[i], i) 
            if (result) {
                arr.push(this[i])
            }
        }
    }

    return arr
}

console.log(courses.MyFilter(function(course, index) {
    return course.languages === 'CSS'
}))




