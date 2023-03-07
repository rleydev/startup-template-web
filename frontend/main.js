import { JoinUsSectionFactory } from './join-us-section.js'
import './scss_styles/style.css'
import  { BigCommunityFactory } from './community-section'
import { Performance } from './performance.js'


const factorySection = new JoinUsSectionFactory();
const communitySection = new BigCommunityFactory();
const performance = new Performance();

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

    performance.measureFetchAndSend()
})