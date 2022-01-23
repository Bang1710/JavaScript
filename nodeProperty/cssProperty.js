let nodeElement = document.querySelector('h1')

nodeElement.style.color = 'green'
nodeElement.style.padding = '20px'
console.log(nodeElement.style.color)

let cssElement = document.querySelector('div')

console.log(cssElement.style)

Object.assign(cssElement.style, {
    backgroundColor: 'yellow',
    width: '100px',
    height: '50px',
    marginTop: '20px',
    marginBottom: '20px'
})


