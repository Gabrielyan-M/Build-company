import { visibleButton } from './buttonTop.js'
import { loadingImagesToGallery } from './loadingImagesPreloader.js'
const elements = document.querySelectorAll('[data-js-visible]')
const header = document.querySelector('[data-js-appearing-element]')

const preloaderBlock = document.querySelector('[data-js-preloader]')
const sections = document.querySelectorAll('[data-js-section]')


window.addEventListener('load', () => {
    document.querySelector('body').classList.remove('scroll-off')
    preloaderBlock.classList.add('preloader-off')

    sections.forEach(section => {
        section.classList.add('dom-load')
    })

    
    
    window.addEventListener('scroll', () => {

        loadingImagesToGallery ()
        visibleButton ()
    })
})

