const imagesBlock = document.querySelector('.images-block')
const arrows = document.querySelectorAll('[data-js-arrow]')

const imgBlocks = document.querySelectorAll('.img-block')





// open images
imgBlocks.forEach(imgBlock => {
    imgBlock.addEventListener('click', (e) => {

        if (e.target.localName != 'img') {
            if ( !(imgBlock.classList.contains('active-img')) ) {
                imgBlock.classList.add('active-img')  
            } else {
                imgBlock.classList.remove('active-img')
            }  
        }

    })

})

// scroll images



arrows.forEach(arrow => {
    arrow.addEventListener('click', (e) => {

        
        const scrollValue = imagesBlock.clientWidth + 20
        

        if (e.currentTarget.attributes['data-arrow-id'].value === 'right') {
            imagesBlock.scrollBy({
                left: scrollValue,
                behavior: 'smooth'
            })
        } else {
            imagesBlock.scrollBy({
                left: -(scrollValue),
                behavior: 'smooth'
            })
        }

        
        // e.stopImmediatePropagation()

    })
})