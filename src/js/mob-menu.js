'use strict'


const MobMenu = () => {
    console.log('jhello');
    const burgerBtn = document.querySelector('.js-btn-open-menu')
    const headerMenu = document.querySelector('.js-header-menu')

    burgerBtn.addEventListener('click', () => {
        console.log('click');
        headerMenu.classList.toggle('mobile-menu')
    })
    
}
export default MobMenu


