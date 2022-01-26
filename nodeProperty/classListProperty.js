/*** classList Property
 * add(class name)
 * contains(class name)
 * remove(class name)
 * toggle(class name)
 * replace(class name current, class name new )
 */

let boxElement = document.querySelector('div')
console.log(boxElement)
console.log(boxElement.classList)

console.log(`Length property: ${boxElement.classList.length}`)
console.log(`Value property: ${boxElement.classList.value}`)

boxElement.classList.add('color', 'newColor')

console.log(boxElement.classList[0])
console.log(boxElement.classList[1])

console.log(boxElement.classList.contains('color'))
console.log(boxElement.classList.contains('green'))

boxElement.classList.remove('color')

setInterval(function() {
    boxElement.classList.toggle('color')
}, 1000)

boxElement.classList.replace('box', 'newBox')
