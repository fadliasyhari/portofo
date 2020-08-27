const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('bar-javascript')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimeLineLite()

t1.formTo(htmlBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(90% - 6px)`, ease: Power4.easeOut })
    .formTo(cssBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(95% - 6px)`, ease: Power4.easeOut })
    .formTo(jsBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(75% - 6px)`, ease: Power4.easeOut })
    .formTo(reactBar, .75, { width: `calc(0% - 6px)` }, { width: `calc(70% - 6px)`, ease: Power4.easeOut })


const contr

