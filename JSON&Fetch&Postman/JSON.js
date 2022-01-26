/*** JSON
 * Là một định dạng kiểu dữ liệu
 * là một chuỗi
 * Javascript Object notation
 * Data type: Number, String, Null, Boolean, Array, Object
 * stringify: Javascript type => JSON
 * Parse: JSON => Javascript type
 */

let jsonNumber = "1";

let jsonString = '"string on JSON"';

let jsonNull = "null";

let jsonBoolean = "true";

let jsonArray = '["Javascript", "PHP", "Dart"]';

let jsonObject = '{"name": "Vbang","age": 18}';

console.log(JSON.parse(jsonNumber));
console.log(typeof JSON.parse(jsonNumber));

console.log(JSON.parse(jsonString));
console.log(typeof JSON.parse(jsonString));

console.log(JSON.parse(jsonNull));
console.log(typeof JSON.parse(jsonNull));

console.log(JSON.parse(jsonBoolean));
console.log(typeof JSON.parse(jsonBoolean));

console.log(JSON.parse(jsonArray));
console.log(typeof JSON.parse(jsonArray));

console.log(JSON.parse(jsonObject));
console.log(typeof JSON.parse(jsonObject));

console.log(JSON.stringify(1));
console.log(JSON.stringify("string on JSON"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(true));
console.log(JSON.stringify(["Javascript", "PHP", "Dart"]));
console.log(
	JSON.stringify({
		name: "Van Bang",
		age: 18,
	})
);
