import { JoinUsSectionFactory } from './join-us-section.js'
import './scss_styles/style.css'

const factorySection = new JoinUsSectionFactory();

document.addEventListener('DOMContentLoaded', () => {


    if (localStorage.getItem('email')) {
        const joinUsSection = factorySection.createSubscribed(true)
        const main = document.querySelector('main');
        main.insertBefore(joinUsSection, main.children[4]);
        
    } else {
        const joinUsSection = factorySection.createSubscribed(false)
        const main = document.querySelector('main');
    
        main.insertBefore(joinUsSection, main.children[4]);
    }
  
})