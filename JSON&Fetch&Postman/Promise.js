/** Promise
 * Sync
 * Async
 * Pain
 * Concept
 * Chain
 * Example
 */

/** Sync/ Async
 * setTimeout, setInterval, fetch
 * XMLhttpRequest
 * file reading, request animation frame
 * call back => callback hell
 */

/**Sync*/
console.log(1);
console.log(2);
// ====> 1 => 2
/**Async */
setTimeout(() => {
	console.log(1);
}, 1000);
console.log(2);


// =====> 2  => 1

/**Callback hell */
// setTimeout(() => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log(2);
// 		setTimeout(() => {
// 			console.log(3);
// 			setTimeout(() => {
// 				console.log(4);
// 				setTimeout(() => {
// 					console.log(5);
// 				}, 1000);
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

/** Promise has three trang thai
 * Pending: đợi
 * Fulfilled
 * Rejected
 */

/**
 * 
Promise là một khái niệm giúp chúng ta có thể xử lý các thao tác bất đồng bộ,
và trước khi có Promise chúng ta sẽ thường sử dụng callback, và callback sẽ xảy ra 
một vấn đề gọi là “callback hell” nó sẽ bị xâu vào nhìn rất khó nhìn, code bị rối rắm, 
khó hiểu. Thế nên Promise được được sinh ra từ phiên bản Javascript mới hơn trong phiên bản ES6
và chúng ta có thể sử dụng nó để khắc phục tình trạng “callback hell”, 
để giúp chúng ta viết code không bị xâu vào, dễ đọc dễ hiểu hơn.

Để tạo ra được một Promise chúng ta sẽ sử dụng từ khóa new với Promise và 
trong contructor của nó, chúng ta sẽ truyền vào một executor function. 
Khi mà excutor được thực thi thì chúng ta sẽ nhận hai tham số dạng hàm, 
1 là resolve(), 2 là reject(). resolve chúng ta sẽ gọi nó khi mà thao tác 
xử lý logic của chúng ta thành công, reject chúng ta sẽ gọi khi thao tác 
xử lý của chúng ta thất bại.

Khi sử dụng Promise thì đối tượng Promise được tạo ra chúng ta sẽ sử dụng qua những phương thức 
là .then() hoặc .catch(). then và catch đều nhận những callback function, 
nó sẽ thực thi vào .then khi Promise của chúng ta được resolve() và sẽ lọt vào .catch khi 
mà Promise của chúng ta được reject()
 */

// Creat promise contructor
let promise = new Promise(
	// Executor
	(resolve, reject) => {
		// Logic
		// Success: resolve()
		// Fail: reject()
        // resolve('resolve!')
        reject('reject')
	}
);

promise
    .then(function(success) {
        // when resolve called 
        // Sẽ được thực thi
        console.log(success)
    })
    .catch(function(error) {
        // when reject called
        console.log(error)
    })
    .finally(function() {
        //  Sẽ được thực hiện khi resolve or reject được gọi
        console.log('Finally!')
    })

