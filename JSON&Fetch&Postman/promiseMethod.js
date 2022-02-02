/** Promise Method
 * Promise.resolve()
 * Promise.reject()
 * Promise.all()
 */

let promise = new Promise((resolve, reject) => {
    resolve()
})

promise
    .then(() =>{
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log(1)
                resolve()
            }, 5000)
        })
    })
    .then(()=> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(2)
                reject()
            }, 1000)
        })
    })
    .catch(() => {
        console.log('error')
    });

// let promiseResolve = Promise.resolve('Success!')

// promiseResolve
//     .then((result) => {
//         console.log('result: ', result)
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject()
//             }, 3000)
//         })
//     })
//     .catch(() => {
//         console.log('Error !')
//     });

// let promiseReject = Promise.reject('Error !')

// promiseReject
//     .then(() => {
//         console.log('success!')
//     })
//     .catch((result) => {
//         console.log('result: ', result)
//     })


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1])
    }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4])
    }, 4000)
})

Promise.all([promise1, promise2])
    .then(function(result) {
        let result1 = result[0]
        let result2 = result[1]
        console.log(result1.concat(result2))
    });

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1])
    }, 2000)
})

let promise4 = Promise.reject('Error !')

Promise.all([promise3, promise4])
    .then(function(result) {
        let result1 = result[0]
        let result2 = result[1]
        console.log(result1.concat(result2))
    })
    .catch((result) => {
        console.log(result)
    })
