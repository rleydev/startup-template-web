class BigCommunity {
    
    createSection() {
        const bigComSection = document.createElement('section');
        bigComSection.classList.add('big-com-section')

        const textContainer = document.createElement('div');
        textContainer.classList.add('big-com-section__text-container');

        const title = document.createElement('h2');
        title.innerHTML = `Big Community of People Like You `
        title.classList.add('big-com-section__text-container__title')

        const subtitle = document.createElement('h3');
        subtitle.innerHTML = "We’re proud of our products, and we’re really excited when we get feedback from our users."
        subtitle.classList.add('big-com-section__text-container__subtitle');

        textContainer.appendChild(title)
        textContainer.appendChild(subtitle)

        bigComSection.appendChild(textContainer)

        let cardContainer = document.createElement('div');
        cardContainer.classList.add('big-com-section__card-container');


        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/community');
            const data = await response.json();
            console.log(data)
            return data;
        }

        const renderData = async () => {
            const data = await fetchData();

            for (let i = 0; i < data.length; i++) {

                let card = document.createElement('div');
                card.classList.add('big-com-section__card-container__card');
                
                let img = document.createElement('img');
                img.classList.add('big-com-section__card-container__card__img');
                img.alt = 'avatar'

                img.src = `${data[i].avatar}`;
            
                let descr = document.createElement('p');
                descr.classList.add('big-com-section__card-container__card__des');
                if (data[i] === data[0]) {
                    descr.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor."
                } else if (data[i] === data[1]) {
                    descr.innerHTML = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut."
                } else {
                    descr.innerHTML = "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                }
            
                let name = document.createElement('p');
            
                name.innerHTML = `${data[i].firstName} ${data[i].lastName}`;
                name.classList.add('big-com-section__card-container__card__name');
            
                let position = document.createElement('p');
                
                position.innerHTML = `${data[i].position}`;
                position.classList.add('big-com-section__card-container__card__pos');

                card.appendChild(img);
                card.appendChild(descr);
                card.appendChild(name);
                card.appendChild(position);

                cardContainer.appendChild(card);

            }
        }
        renderData()

        bigComSection.appendChild(cardContainer);

        const main = document.querySelector('main');
        main.insertBefore(bigComSection, main.children[3])
    }
}

export class BigCommunityFactory {
    create() {
        return new BigCommunity().createSection()
    }
}