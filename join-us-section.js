import validate from './email-validator.js';

class JoinUsSection {

    constructor(title, buttonText, isSubscribed) {
        this.title = title
        this.buttonText = buttonText
        this.isSubscribed = isSubscribed
    }
    
    createSection() {
    
        const joinProgramSection = document.createElement('section')
        joinProgramSection.classList.add('join-program-section')

        const layer = document.createElement('div')

        layer.classList.add('join-program-section__layer')


        joinProgramSection.appendChild(layer)

        const title = document.createElement('h2')
        title.innerHTML = this.title
        title.classList.add('join-program-section__layer--title')

        const subtitle = document.createElement('h3')
        subtitle.classList.add('join-program-section__layer--subtitle')
        subtitle.innerHTML = "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

        const emailForm = document.createElement('form')
        emailForm.id = 'email-form'
        emailForm.classList.add('join-program-section__layer__email-form')

        const emailInput = document.createElement('input')
        emailInput.id = 'email-input'
        emailInput.type = "email"
        emailInput.placeholder = "Email"
        emailInput.classList.add('join-program-section__layer__email-form__email-input')

        const emailButton = document.createElement('button')
        emailButton.id = 'email-button'
        emailButton.classList.add('app-section__button')
        emailButton.classList.add('join-program-section__layer__email-form__button--subscribe')
        emailButton.type = this.buttonText
        emailButton.innerHTML = "SUBSCRIBE"

        let emailValue = ''

        if (this.isSubscribed) {
            emailInput.style.display = 'none'

            emailButton.addEventListener('click', e => {
                e.preventDefault()
                localStorage.removeItem('email')
            })

            emailButton.innerHTML = "UNSUBSCRIBE"
            
        } else {
            emailInput.style.display = 'block'
            emailInput.value = localStorage.getItem('input-email')
            emailInput.autocomplete = "off"
            emailInput.style.color = 'white'

            emailButton.addEventListener('click', e => {
                e.preventDefault();
        
                emailValue = emailInput.value;
                const isValid = validate(emailValue);
        
                isValid ? localStorage.setItem('email', emailValue) : alert('Invalid email format!')
                emailInput.value = emailValue
            })

            emailInput.addEventListener('input', e => {
                e.preventDefault()
                const currentValue = e.target.value;
                localStorage.setItem('input-email', currentValue)
            })
       
        }


        emailForm.appendChild(emailInput)
        emailForm.appendChild(emailButton)

        layer.appendChild(title)
        layer.appendChild(subtitle)
        layer.appendChild(emailForm)

        return joinProgramSection;
    }

}

export class JoinUsSectionFactory {
    create(type) {
        switch(type) {
            case 'standart':
                return new JoinUsSection("Join Our Program",
                                         "subscribe").createSection()
            case 'advanced':
                return new JoinUsSection("Join Our Advanced Program",
                                         "Subscribe to Advanced Program").createSection()
            default:
                throw new Error('Invalid...');
        } 
    }

    createSubscribed(isSubscribed) {
        switch (isSubscribed) {
            case true:
                return new JoinUsSection("Join Our Program", "unsubscribe", true).createSection()
            case false:
                return new JoinUsSection("Join Our Program", "subscribe", false).createSection()
        }
    }
}

