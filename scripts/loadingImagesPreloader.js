

const imagesBlock = document.querySelector('[data-js-images-block]')
const imgPreloader = document.querySelectorAll('[data-js-img-block-preloader]')




function loadingImagesToGallery () {

    if (0 > imagesBlock.getBoundingClientRect().top - (window.innerHeight*2)) {
        
        for (let i = 0; i < imgPreloader.length; i++) {
            let ix = i + 1
            imgPreloader[i].style.background = `url(./media/images/preload-gallery/image${ix}.png) center center / cover no-repeat`

            
        }           
    }
}



export { loadingImagesToGallery }
