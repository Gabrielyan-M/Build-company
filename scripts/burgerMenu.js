const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')

const anchorLinks = document.querySelectorAll('[data-js-anchor-link]')

burgerButton.addEventListener('click', () => {
    
    burgerButton.classList.toggle('active-menu')
    burgerMenu.classList.toggle('active-menu')

    document.querySelector('body').classList.toggle('scroll-off')

})

anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener('click', () => {
        
        burgerButton.classList.remove('active-menu')
        burgerMenu.classList.remove('active-menu')
        
        document.querySelector('body').classList.remove('scroll-off')

    })
})
