import { JoinUsSectionFactory } from './join-us-section.js'
import './scss_styles/style.css'
import  { BigCommunityFactory } from './community-section'

const factorySection = new JoinUsSectionFactory();
const communitySection = new BigCommunityFactory();

document.addEventListener('DOMContentLoaded', () => {

    communitySection.create()

    if (localStorage.getItem('email')) {
        const joinUsSection = factorySection.createSubscribed(true)
        const main = document.querySelector('main');
        main.insertBefore(joinUsSection, main.children[5]);
        
    } else {
        const joinUsSection = factorySection.createSubscribed(false)
        const main = document.querySelector('main');
    
        main.insertBefore(joinUsSection, main.children[5]);
    }
})