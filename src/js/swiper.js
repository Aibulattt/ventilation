import Swiper, {Pagination, Navigation} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swiperr = () => {
    Swiper.use([Navigation, Pagination]);

    const swiper = new Swiper('.swiper-why-we', {
        loop: true,

        pagination: {
            el: '.pagination-why-we',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-next-why-we',
            prevEl: '.swiper-prev-why-we',
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
            el: '.pagination-clients',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        centerSlides: true,
    })
}

export default Swiperr