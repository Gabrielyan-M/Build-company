const questions = document.querySelectorAll('[data-js-question]')

questions.forEach(question => {
    question.addEventListener('click', (e) => {
        const questionAnswerBlock = question.parentElement

        questionAnswerBlock.classList.toggle('active-question')
        
    })
})
