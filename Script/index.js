function load() {
    if (screen.width < 801) {
        mobile = true
        fronts = document.getElementsByClassName('front')
        for (var i = fronts.length - 1; i >= 0; i--) {
            console.log(fronts)
            fronts[i].addEventListener('click',function() {explain_mobile(this)})
        }
    } else {
        mobile = false
    }
    return mobile
}

function explain_mobile(element) {
    text = element.parentElement.lastChild.previousElementSibling.innerHTML
    explanation = document.getElementsByClassName('explanation')[0].children
    explanation[0].innerText = element.innerText // title
    explanation[1].innerHTML = text // paragraph
}