'use strict'

const Form = () => {
    const btnOpen = document.querySelectorAll('.js-btn-open-form')
    const form = document.forms.feedback
    const modal = document.querySelector('.js-feedback')
    const btnClose = document.querySelector('.js-btn-close')
    const overlay = document.querySelector('.overlay')

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
        const formData = new FormData(form)

        // const fetched = await fetch('mail.php', {
        //     method: 'POST',
        //     body: formData
        // })
    })
}

export default Form