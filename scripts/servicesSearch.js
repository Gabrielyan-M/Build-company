const searchButton = document.querySelector('[data-js-service-search-button]')
const serviceSearch = document.querySelector('[data-js-service-search]')

const serviceNameAll = document.querySelectorAll('[data-js-service-name]')

const openTable = document.querySelector('[data-js-open-table-services]')






function serviseSearchFun () {
    
    let valueSearch = serviceSearch.value.trim()

    if (valueSearch != '') {

        serviceNameAll.forEach(service => {
            let serviceName = service.textContent.toLocaleLowerCase()

            if ( serviceName.search(valueSearch.toLocaleLowerCase()) == -1 ) {
                service.parentNode.classList.add('off-item')
            } else {
                service.parentNode.classList.remove('off-item')
  
            }
        })
            
        
    } else {
        
        serviceNameAll.forEach(service => {
            service.parentNode.classList.remove('off-item')
        })
    }

}



serviceSearch.addEventListener('input', (e) => {
  
    setTimeout (() => {
        document.querySelector('.services__container').classList.add('active-table')
        
        if (window.innerWidth < 780) {

            serviceSearch.value.length > 0
            ?openTable.style.display = 'none'
            :openTable.style.display = 'block'

            openTable.textContent = 'Свернуть'

        }
    
    serviseSearchFun ()

    }, 800)

})

searchButton.addEventListener('click', () => {
        
    serviseSearchFun ()
})

openTable.addEventListener('click', () => {
    
    document.querySelector('.services__container').classList.toggle('active-table')

    openTable.textContent === 'Раскрыть'
    ?openTable.textContent = 'Свернуть'
    :openTable.textContent = 'Раскрыть'
     
})