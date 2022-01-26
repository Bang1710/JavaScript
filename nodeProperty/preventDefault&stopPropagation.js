/*** DOM Events
 * preventDefault: ngăn chặn hành động mặc định của trình duyệt
 * stopPropagation: ngăn chặn sự nổi bọt
 */

let aElements = document.querySelectorAll('a')

for (let i = 0; i < aElements.length; i++) {
    aElements[i].onclick = (e) => {
        if(!e.target.href.startsWith("https://www.google.gg/")) {
            e.preventDefault();
        }
        console.log(e.target.href)
    }
}

let divElement = document.querySelector('.stop')

let h1StopElement = document.querySelector('.h1__stop')

divElement.onclick = () => {
    console.log('div')
}

h1StopElement.onclick = (e) => {
    e.stopPropagation()   // Ngăn chặn sự nổi bọt
    console.log('h1 tag')
}