// Cho trước hàm getRequestBodyFromValues và tham số formValues, các test case sẽ gọi hàm này và truyền đối số có định dạng tương tự như sau:

// [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
//     // ...
// ]
// Như các bạn thấy, formValues là một mảng có thể chứa nhiều objects. Mỗi object chứa 2 keys là field và value.
// Yêu cầu
// Từ array formValues đã cho, hãy trả về một object có các keys tương ứng với các fields của các objects nằm trong array formValues.


function getRequestBodyFromValues(formValues) {
    let arrLength = formValues.length;
    let result = {}
    for (let i = 0; i < arrLength; i++) {
        let key1 = formValues[i].field;
        let value1 = formValues[i].value;
        result[key1] = value1;
    }
    return result
}

let input = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
];

let input2 = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },
]


console.log(getRequestBodyFromValues(input));
console.log(getRequestBodyFromValues(input2));

