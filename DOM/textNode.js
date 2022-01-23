let textElement = document.querySelector('h1')

console.log(textElement)

let listTextElement = document.querySelectorAll('.list .items')

for(let i in listTextElement) {
    listTextElement[i].innerText = 'Đây là thẻ li'
}

console.log(document.querySelector('ul'))
console.log(document.querySelector('ul').innerText)
console.log(document.querySelector('ul').textContent)
