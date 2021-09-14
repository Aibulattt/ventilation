'use strict'
// import Swiper, {Pagination, Navigation} from 'swiper'
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

window.addEventListener('DOMContentLoaded', () => {
    const btnOpen = document.querySelectorAll('.js-btn-open-form')
    const form = document.forms.feedback
    const modal = document.querySelector('.js-feedback')
    const btnClose = document.querySelector('.js-btn-close')
    const overlay = document.querySelector('.overlay')
    const formSended = document.querySelector('.feedback__sended')

    btnOpen.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active')
            overlay.classList.add('active')
            document.body.style.overflow = 'hidden'
        })
    })

    btnClose.addEventListener('click', () => {
        modal.classList.remove('active')
        overlay.classList.remove('active')
        document.body.style.overflow = 'unset'
    })

    overlay.addEventListener('click', () => {
        modal.classList.remove('active')
        overlay.classList.remove('active')
        document.body.style.overflow = 'unset'
    })

    form.addEventListener('submit', async (ev) => {
        ev.preventDefault()

        formSended.classList.add('active')

        const fetched = await fetch('mail.php', {
            method: 'POST',
            body: new FormData(form)
        })
        console.log(fetched);   
        form.reset()
    })

    // Swiper.use([Navigation, Pagination]);

    // const swiper = new Swiper('.swiper-why-we', {
    //     loop: true,

    //     pagination: {
    //         el: '.pagination-why-we',
    //         clickable: true
    //     },

    //     navigation: {
    //         nextEl: '.swiper-next-why-we',
    //         prevEl: '.swiper-prev-why-we',
    //     },
    //     centerSlides: true,
    //     breakpoints: {
    //         768: {
    //             slidesPerView: 3,
    //             navigation: false,  
    //             pagination: false
    //         }
    //     }
    // })

    // const swiperTwo = new Swiper('.swiper-clients', {
    //     loop: true,

    //     pagination: {
    //         el: '.pagination-clients',
    //         clickable: true
    //     },

    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     centerSlides: true,
    // })

    // const swiperThree = new Swiper('.swiper-about', {
    //     loop: true,
    //     pagination: {
    //         el: '.pagination-about',
    //         clickable: true
    //     },
    //     navigation: {
    //         nextEl: '.swiper-prev-about',
    //         prevEl: '.swiper-next-about'
    //     },
    //     // centeredSlides: true,
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 2
    //         },
    //         768: {
    //             slidesPerView: 4
    //         },
    //         1025: {
    //             slidesPerView: 6,
    //             pagination: false,
    //             navigation: false
    //         }
    //     }
    // })

    const burgerBtn = document.querySelector('.js-btn-open-menu')
    const headerMenu = document.querySelector('.header__menu')

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        headerMenu.classList.toggle('active')
        document.body.classList.toggle('lock')
    })


})

