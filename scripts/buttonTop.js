const buttonTop = document.querySelector('[data-js-button-top]')
const footerButtonTop = document.querySelector('[data-js-footer-button-top]')
const welcomeSection = document.querySelector('#welcome-section')
const footer = document.querySelector('footer')


function visibleButton () {
    let footerBottom = footer.getBoundingClientRect().bottom
    let footerHeight = footer.getBoundingClientRect().height

    if (window.scrollY > welcomeSection.clientHeight) {
        buttonTop.classList.add('active-button-top')

        if ( footerHeight > (footerBottom - window.outerHeight + 100) ) {
            buttonTop.classList.remove('active-button-top')
            footerButtonTop.classList.add('active-footer-button-top')
        } else {
            buttonTop.classList.add('active-button-top')
            footerButtonTop.classList.remove('active-footer-button-top')
        }

    } else {
        buttonTop.classList.remove('active-button-top')
    }
}


buttonTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

footerButtonTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})



export { visibleButton }