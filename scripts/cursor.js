const cursor = document.getElementById('cursor')
const cursorPoint = document.getElementById('cursor-point')

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
        cursor.style.border = '3px solid rgb(129, 96, 52)'
        cursorPoint.style.backgroundColor = 'rgb(129, 96, 52)'
        
    })

    cursorEnter.addEventListener('mouseout', () => {
        cursor.style.border = '2px solid rgb(255, 255, 255)'
        cursorPoint.style.backgroundColor = 'rgb(255, 255, 255)'
        
    })

})




















//  delete
document.addEventListener('keydown', (e) => {
     if (e.key === 'F12') {
        document.querySelector('html').classList.toggle('console-open')  
     }
        
})


