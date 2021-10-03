const TabMenu = () => {
    let href = window.location.href
    let link = document.querySelectorAll('.header__nav-link')

    link.forEach(el => {
        let link2 = el.dataset.menu
        if (href === link2) {
            el.classList.add('active')
        }
    })
}

export default TabMenu