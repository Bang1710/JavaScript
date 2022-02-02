let promise = new Promise((resolve, reject) => {
	// resolve();
});

promise
	.then(() => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve([1, 2, 3]);
                // reject()
			}, 3000);
		});
	})
	.then((data) => {
		console.log(data);
	})
	.catch(() => {
        console.log('this is a error')
    })
	.finally(() => {
		console.log("Done!");
	});

function sleep(ms) {
        return new Promise(function(resolve) {
            setTimeout(resolve, ms)
        });
}

sleep(1000)
    .then(() => {
        console.log(1)
        return sleep(1000)
    })
    .then(() => {
        console.log(2)
        return sleep(1000)
    })
    .then(() => {
        console.log(3)
        return sleep(1000)
    })
    .then(() => {
        console.log(4)
        return sleep(1000)
    })
    .catch(() => {})
    .finally(() => {console.log('Done!')});


