const cursor = document.getElementById('cursor')
const cursorPoint = document.getElementById('cursor-point')
const cursorOff = document.querySelectorAll('.cursor-off')

window.addEventListener('pointermove', (e) => {

     if (e.pointerType !== "touch") {
        cursor.style.display = 'flex'
        cursor.style.top = `${e.clientY}px`
        cursor.style.left = `${e.clientX}px`  
    } else {
        cursor.style.display = 'none'
    }
})

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'
})

document.querySelectorAll('.cursorEnter').forEach(cursorEnter => {

    cursorEnter.addEventListener('mouseenter', () => {
        cursor.style.border = '2px solid rgba(255, 255, 255, 0.4)'
        cursorPoint.style.backgroundColor = 'rgb(255, 255, 255)'
    })

    cursorEnter.addEventListener('mouseout', () => {
        cursor.style.border = '2px solid rgb(255, 255, 255)'
        cursorPoint.style.backgroundColor = 'rgb(255, 255, 255)'
    })


})

cursorOff.forEach(cursorOff => {

    cursorOff.addEventListener('mouseenter', () => {       
        cursor.style.visibility = 'hidden'
    })

    cursorOff.addEventListener('mouseout', () => {
        cursor.style.visibility = 'visible'
    })


})






















//  delete
document.addEventListener('keydown', (e) => {
     if (e.key === 'F12') {
        document.querySelector('html').classList.toggle('console-open')  
     }
        
})


