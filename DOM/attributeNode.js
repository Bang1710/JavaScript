
let attributeElement = document.querySelector('h1')
console.log(attributeElement)

// Có 2 cách seter và geter cho attribute Node


attributeElement.title = `It's id`

attributeElement.className = 'elementById'

attributeElement.style = 'color: red; padding: 20px; font-size: 15px; font-style: italic'

console.log(attributeElement.id)
console.log(attributeElement.style)
console.log(attributeElement.title)

// Cách set và get qua phương thức

attributeElement.setAttribute('data-min', '1s')
attributeElement.setAttribute('href', 'https://javascript.info/')

console.log(attributeElement.getAttribute('href'))
console.log(attributeElement.getAttribute('data-min'))


