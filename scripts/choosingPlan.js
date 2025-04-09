const planCards = document.querySelectorAll('[data-js-plan-card]')
const planButtons = document.querySelectorAll('[data-js-plan-button]')

function choosingPlan (e) {


    planButtons.forEach(btnX => {
        if ( btnX.attributes['data-id-plan'].value === e.target.attributes['data-id-plan'].value ) {
            btnX.classList.add('active-plan')
            
        } else {
            btnX.classList.remove('active-plan')

        }
    })
   
    planCards.forEach(card => {

        if ( card.attributes['data-id-plan'].value === e.target.attributes['data-id-plan'].value ) {
            card.classList.add('active-plan')
            
        } else {
            card.classList.remove('active-plan')

        }


    })
    

    
}

planButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {

        choosingPlan (e)   
        
    })
})





