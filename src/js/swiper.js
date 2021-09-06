import Swiper from 'swiper'
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
// import 'swiper/swiper-bundle.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiperr = () => {
    SwiperCore.use([Navigation, Pagination]);

    const swiper = new Swiper('.swiper-why-we', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centerSlides: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                navigation: false,  
                pagination: false
            }
        }
    })

    const swiperTwo = new Swiper('.swiper-clients', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centerSlides: true,
    })
}

export default Swiperr