/**
 * Node.appendChild () thêm một nút vào cuối danh sách các nút con của một nút cha được chỉ định
 * Node.cloneNode (): trả về một bản sao của nút mà phương thức này được gọi.
 * Node.contains(): Phương contains() thức của Node giao diện trả về một giá trị boolean cho 
 * biết liệu một nút có phải là con của một nút nhất định hay không, đó là chính nút đó,
 * một trong các nút con trực tiếp của nó ( childNodes), một trong các nút con trực tiếp 
 * của chúng, v.v.
 * Node.hasChildNodes (): trả về một giá trị boolean cho biết liệu đã cho Node có các nút con hay không.
 * Node.insertBefore (): chèn một nút trước một nút tham chiếu như là một nút con của một nút cha được chỉ định .
 * Node.removeChild(): loại bỏ một nút con khỏi DOM và trả về nút đã bị loại bỏ. 
 * Node.replaceChild(newChild, oldChild):  thay thế một nút con trong nút (cha) đã cho.
 */

let appendChildElement = 
    document.querySelector('.list').appendChild(document.createElement('p'))

appendChildElement.id = 'appendChildElement'

appendChildElement.innerText = 'Đây là thể p mới được thêm vào'

let cloneNode =  document.querySelector('.list').cloneNode(true)
console.log(cloneNode)

console.log(document.querySelector('.list').contains(document.querySelector('p')))
console.log(document.querySelector('.list').contains(document.querySelector('h1')))

console.log(document.querySelectorAll('h2')[0].hasChildNodes())
console.log(document.querySelectorAll('h2')[1].hasChildNodes())


document.querySelector('.list').insertBefore(document.querySelector('.list').cloneNode(true)
, document.querySelector('.items:nth-child(2)'))

console.log(document.querySelector('.items:nth-child(1)').isEqualNode(
    document.querySelector('.items:nth-child(3)')
))

console.log(document.querySelectorAll('h2')[1].isEqualNode(
    document.querySelectorAll('h2')[2]
))

console.log(document.querySelector('.list').removeChild(
    document.querySelector('.list > ul')
))

console.log(document.querySelector('h2').parentNode.removeChild(
    document.querySelector('h2')
))


document.querySelector('.list').replaceChild(
    document.createElement('p'),
    document.querySelector('.items')
)




