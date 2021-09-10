'use strict'


const MobMenu = () => {
    const burgerBtn = document.querySelector('.js-btn-open-menu')
    const headerMenu = document.querySelector('.header__menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        headerMenu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })
    
}

export default MobMenu


