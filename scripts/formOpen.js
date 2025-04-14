const formBlockAll = document.querySelectorAll('.form')
const formAll = document.querySelectorAll('form')

const formOpenButtonsAll = document.querySelectorAll('[data-js-form-open]')
const formSubmitButtonsAll = document.querySelectorAll('[data-js-form-submit]')
const formCloseButtonsAll = document.querySelectorAll('[data-js-form-close]')



function openForm (openBtn, e) {

        

    openBtn.classList.add('active-form')
    

    formSubmitButtonsAll.forEach(x => {
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            x.classList.add('active-form')
        }
    })

    formBlockAll.forEach(x => {
        
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            x.classList.add('active-form')
        }
    })

    formAll.forEach(x => {
                    
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            x.classList.add('active-form')

            for (let i = 0; i < x.children.length; i++) {
                setTimeout(() => {
                    x.children[i].classList.add('active-form')
                }, i*200)

            }
            
        }
    })

    formCloseButtonsAll.forEach(x => {
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            x.classList.add('active-form')
        }
    })
}

function closeForm (closeBtn, e) {

        
    closeBtn.classList.remove('active-form')

    

    formSubmitButtonsAll.forEach(x => {
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            setTimeout(() => {
                x.classList.remove('active-form')
            }, 500)
        }
    })

    formBlockAll.forEach(x => {
        
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            
            setTimeout(() => {
                x.classList.remove('active-form')
            }, 500)
        }
    })

    formAll.forEach(x => {
                    
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            setTimeout(() => {
                x.classList.remove('active-form')
            }, 500)

            for (let i = 0; i < x.children.length; i++) {
                setTimeout(() => {
                    x.children[i].classList.remove('active-form')
                }, i*100)
            }
            
        }
    })

    formOpenButtonsAll.forEach(x => {
        if (x.attributes['data-id-form'].value === e.target.attributes['data-id-form'].value) {
            setTimeout(() => {
                x.classList.remove('active-form')
            }, 600)
        }
    })
}

function toggleFooterText (e) {

    const footerText = document.querySelector('[data-js-footer-text]')
    const footerDocuments = document.querySelector('[data-js-footer-documents]')


    if (  e.target.attributes['data-id-form'].value === 'footer' && !( footerText.classList.contains('active-form') )  ) {
        
        footerText.classList.add('active-form')
        footerDocuments.classList.add('active-form')
    } else {
        setTimeout(() => {
            footerText.classList.remove('active-form')
            footerDocuments.classList.remove('active-form')
        }, 700)
    }

    

    
}


// open Form
formOpenButtonsAll.forEach(openBtn => {
    openBtn.addEventListener('click', (e) => {

        toggleFooterText (e)
        openForm (openBtn, e)

        
    })
})

formCloseButtonsAll.forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {

        toggleFooterText (e)
        closeForm (closeBtn, e)

        
    })
})



