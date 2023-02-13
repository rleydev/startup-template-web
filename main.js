document.addEventListener('DOMContentLoaded', () => {

    const prevSection = document.getElementById('learn-more-section')

    const joinProgramSection = document.createElement('section')
    joinProgramSection.classList.add('join-program-section')

    const layer = document.createElement('div')
    layer.classList.add('join-program-section__layer')

    joinProgramSection.appendChild(layer)

    const title = document.createElement('h2')
    title.innerHTML = "Join Our Program"
    title.classList.add('join-program-section__layer--title')

    const subtitle = document.createElement('p')
    subtitle.classList.add('join-program-section__layer--subtitle')
    subtitle.innerHTML = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

    const emailForm = document.createElement('form')
    emailForm.classList.add('join-program-section__layer__email-form')

    const emailInput = document.createElement('input')
    emailInput.type = "email"
    emailInput.placeholder = "Email"
    emailInput.classList.add('join-program-section__layer__email-form__email-input')

    const emailButton = document.createElement('button')
    emailButton.classList.add('app-section__button')
    emailButton.classList.add('join-program-section__layer__email-form__button--subscribe')
    emailButton.type = "submit"
    emailButton.innerHTML = "SUBSCRIBE"

    emailButton.addEventListener('click', e => {
        e.preventDefault();
        if (emailInput.value === '') {
            console.log('email is empty, please enter email')
        } else {
            console.log(emailInput.value)
        }
    })


    emailForm.appendChild(emailInput)
    emailForm.appendChild(emailButton)

    layer.appendChild(title)
    layer.appendChild(subtitle)
    layer.appendChild(emailForm)

    prevSection.parentNode.insertBefore(joinProgramSection, prevSection.nextSibling)
})