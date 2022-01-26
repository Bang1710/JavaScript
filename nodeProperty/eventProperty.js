/**
 * https://www.w3schools.com/js/js_htmldom_events.asp
 * https://www.w3schools.com/jsref/dom_obj_event.asp
 * https://developer.mozilla.org/en-US/docs/Web/Events
 */

/** DOm Event
 * input/ select
 * key up / key down
 */

"use strict";
let btnEvent = document.querySelector(".btn__click");

function Event1() {
	// document.querySelector('div').classList.toggle('color')
	console.log("1");
}

btnEvent.addEventListener("click", Event1);

setTimeout(function () {
	btnEvent.removeEventListener("click", Event1);
}, 3000);

let h1Elements = document.querySelectorAll("h1");

// console.log(h1Elements)

// for(let i = 0; i < h1Elements.length; i++) {
//     h1Elements[i].onclick = function(mouseEvent) {
//         console.log(mouseEvent.target)
//         console.log(mouseEvent.target.innerText)
//     }
// }

for (let key of h1Elements) {
	key.onclick = () => {
		console.log(key, key.textContent);
	};
}

/***
 * onchange/oninput
 * onkeyup/onkeydown
 */

let inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement)
inputElement.onchange = function (mouseEvent) {
	console.log(mouseEvent.target.value);
}; //=> ki ta blur ra ngoài hoặc enter thì ta sẽ nhận được giá trị

let inputValue;
inputElement.oninput = function (mouseEvent) {
	inputValue = mouseEvent.target.value;
	console.log(inputValue); // Khi type đến đâu thì ta sẽ nhận value đến đó
};

let checkboxElement = document.querySelector('input[type="checkbox"]');

checkboxElement.onchange = function (event) {
	console.log(event.target.checked); // Return a boolean
};

let selectElement = document.querySelector("select");

selectElement.onchange = function (e) {
	console.log(e.target.value); //get value when change option value
};

let inputKeyElement = document.querySelector("#input__key");

// inputKeyElement.onkeyup = function(e) {
//     console.log(e.which)  //hiển thị vị trí của phím
// }

document.onkeyup = function (e) {
	// console.log(e.which)

	switch (e.which) {
		case 27:
			console.log("Đây là phím Esc");
			break;
		case 66:
			console.log("b");
			break;
		case 65:
			console.log("a");
			break;
		case 78:
			console.log("n");
			break;
		case 71:
			console.log("g");
			break;
		default:
			break;
	}
};

// ------------------------Event Listener-----------------------

// h1Element.onclick = function() {
//     console.log(Math.floor(Math.random()*100))
// }
