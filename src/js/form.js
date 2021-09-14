'use strict'

const Form = () => {
    const btnOpen = document.querySelectorAll('.js-btn-open-form')
    const form = document.forms.feedback
    const modal = document.querySelector('.js-feedback')
    const btnClose = document.querySelector('.js-btn-close')
    const overlay = document.querySelector('.overlay')
    const formSended = document.querySelector('.feedback__sended')
    const btnCloseSend = document.querySelector('.js-btn-close-send')

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
        console.log(btnCloseSend);
        btnCloseSend.addEventListener('click', () => {
            formSended.classList.remove('active')
        })

        const fetched = await fetch('mail.php', {
            method: 'POST',
            body: new FormData(form)
        })
        console.log(fetched);   
        form.reset()
    })
}

export default Form