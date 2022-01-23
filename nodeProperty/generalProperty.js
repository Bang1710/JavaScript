// https://developer.mozilla.org/en-US/docs/Web/API/Node
// https://javascript.info/basic-dom-node-properties
// https://www.w3schools.com/js/js_htmldom_elements.asp

// Node property
/** 
 * Node.baseURI: Returns a String representing the base URL of the document containing the Node
 * Node.childNodes: Returns a live NodeList containing all the children of this node (including elements, text and comments)
 * Node.firstChild: Trả về một Node đại diện cho nút con trực tiếp đầu tiên của nút hoặc null nếu nút không có nút con.
 * Node.lastChild: Trả về phần tử đại diện cuối cùng của node con của nó
 * Node.nextSibling: Trả về một Node đại diện cho nút tiếp theo trong cây hoặc null nếu không có nút như vậy
 * Node.nodeValue: Trả về / Đặt giá trị của nút hiện tại.
 * ownerDocument: trả về đối tượng tài liệu cấp cao nhất của nút.
 * Node.parentElement:  trả về cha của nút DOM Element hoặc null nếu nút không có cha hoặc cha của nó không phải là DOM Element
 * Node.parentNode: trả về node 
 * Node.previousSibling: trả về nút ngay trước nút được chỉ định trong childNodes danh sách cha của nó hoặc null nếu nút được chỉ định là nút đầu tiên trong danh sách đó.

*/

let nodeElement = document.querySelector('h1')
console.log(nodeElement.baseURI)

console.log(document.querySelector('.list').childNodes)

console.log(document.querySelector('h1').firstChild)

console.log(document.querySelector('h2').firstChild)

console.log(document.querySelector('.list').firstChild)
console.log(document.querySelector('.list').lastChild)

console.log(document.querySelector('h2:nth-child(2)').nextSibling)
console.log(document.querySelector('h3').nextElementSibling)

console.log(document.querySelector('h1').tagName)

console.log(document.querySelector('h1').firstChild.nodeName)

console.log(document.querySelector('h1').nodeType)
console.log(nodeElement.firstChild.nodeType)

console.log(document.querySelector('h1').nodeValue)

console.log(document.querySelector('h1').ownerDocument)

console.log(nodeElement.firstChild.parentElement)

document.querySelector('.items').parentElement.style.color = 'red'
console.log(document.querySelector('.items').parentElement)

console.log(nodeElement.firstChild.parentNode)

console.log(document.querySelector('.items').firstChild.parentNode)

console.log(document.querySelector('.items:nth-child(2)').previousSibling)
console.log(document.querySelector('.items:nth-child(2)').previousElementSibling)

console.log(nodeElement.textContent)

console.log(document.querySelector('.list').innerHTML)
console.log(document.querySelector('.list').innerText)
console.log(document.querySelector('.list').outerHTML)
console.log(document.querySelector('.list').textContent)














