const burgerButton = document.querySelectorAll('[data-js-burger-button]')
const navigationMenu = document.querySelectorAll('[data-js-navigation-menu]')
const body = document.querySelector('[data-js-body]')


function navMenu (data) {
      navigationMenu.forEach(menu => {
            if (menu.getAttribute('data-js-navigation-menu') === data) {
                  menu.classList.toggle('active')
                  
            }
      })
}

burgerButton.forEach((button) => {
      button.addEventListener('click', () => {
            if ( button.getAttribute('data-js-burger-button') ) {
                  navMenu (button.getAttribute('data-js-burger-button'))
                  button.classList.toggle('active')
            } 

            body.classList.toggle('active')
      })
})


window.addEventListener('resize', (e) => {
      if (e.target.innerWidth > 1000 ) {
            burgerButton.forEach(elem => {
                  elem.classList.remove('active')
            })

            navigationMenu.forEach(elem => {
                  elem.classList.remove('active')
            })

            body.classList.remove('active')
      }
})


