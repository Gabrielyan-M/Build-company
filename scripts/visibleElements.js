const elements = document.querySelectorAll('[data-js-visible]')

const options = {
    threshold: 0.2,
}

const callback = ( entries, observer ) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-element')
        }
    });

}

const observer = new IntersectionObserver ( callback, options )

elements.forEach(elem => {
    observer.observe( elem )
})
