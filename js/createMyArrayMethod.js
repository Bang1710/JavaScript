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


