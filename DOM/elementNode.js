/*
* HTML DOM
1. Element
2. attribute
3. text
*/

/* Get element methods
** Element: ID, class, Tag name,
            CSS selector, HTML selection 
    ID: document.getElementById('id name')  => Nó sẽ trả về element đó
    class: document.getElementsByClassName('class name')   => Nó sẽ trả về các element in HTML Collection
    Tag name: document.getElementsByTagName('tag name')  => Nó sẽ trả về các element in HTML collection
    CSS selector: document.querySelector('name selector of tag name')  => Nó sẽ trẻ về các element in NodeList (Nếu dùng All)
    HTML collections: document.anchors()  =>
*/
console.log(document.getElementById('elementById'))

console.log(document.getElementsByClassName('elementByClass'))

console.log(document.getElementsByTagName('h3'))

let list = document.querySelector('.list')

console.log(list.querySelectorAll('.items'))

console.log(document.querySelector('.list .items'))
console.log(document.querySelector('.list .items:nth-child(2)'))

console.log(document.querySelectorAll('.list .items'))

let elementCSSSelectors = document.querySelectorAll('.list .items')

for (let key in elementCSSSelectors  ) {
    if (elementCSSSelectors.hasOwnProperty(key)) {
        console.log(elementCSSSelectors[key])
    }
}

console.log(document.forms)






