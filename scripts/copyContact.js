const contactsInfo = document.querySelectorAll('[data-js-contact]')
const natification = document.querySelector('[data-js-notification]')


// !
// Добавить к каждому элементу атрибут data-contact-name="" 
// Сделать уведомление о том что текст скопирован



function notificationCopy () {

        natification.classList.add('active-notification')

        setTimeout(() => {
            natification.classList.remove('active-notification')
     
        }, 2000)
}

contactsInfo.forEach(contact => {
    contact.addEventListener('click', (e) => {
        navigator.clipboard.writeText(e.currentTarget.attributes['data-id-contact'].value)
        
        notificationCopy ()
    })
})