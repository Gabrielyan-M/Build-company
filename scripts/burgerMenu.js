const burgerButton = document.querySelector('.burger-button')
const burgerMenu = document.querySelector('.burger-menu')


burgerButton.addEventListener('click', () => {
    
    burgerButton.classList.toggle('active-menu')
    burgerMenu.classList.toggle('active-menu')

    document.querySelector('body').classList.toggle('scroll-off')

})
