# Frontend web page template project for StartUp company - Pet project

## Run instructions:
- Open Frontend folder and Backend folder separately
- **See commands for frontend and backend npm bellow**

### Webpack Frontend commands:
- npm run dev: development mode
- npm run build: production build
- npm run start: webpack -w
- (localhost:9000)

### Backend commands:
- npm install
- npm run dev: development mode
- npm run start: launch server
- (localhost:3000)

### Frontend Libraries:
- @babel/core@7.21.0
- @babel/preset-env@7.20.2
- @babel/register@7.21.0
- babel-loader@9.1.2
- chai@4.3.7
- css-loader@6.7.3
- gh-pages@5.0.0
- html-loader@4.2.0
- html-webpack-plugin@5.5.0
- mocha@10.2.0
- sinon@15.0.1
- style-loader@3.3.1
- webpack-cli@5.0.1
- webpack-dev-server@4.11.1
- webpack-merge@5.8.0
- webpack@5.75.0

### About:

- Fully responsive landing from 410px
- Mobile version adaptive design with breakpoint at (768px)
- HTML, CSS
- JavaScript
- SASS preprocessor - SCSS 
- Gitflow
- Landing is developed according to Figma design
- Section Join Us implemented through Vanilla JS
- Webpack 5
- Factory pattern in Join Our Program Section
- Email validation for (@gmail.com, @hotmail.com)
- Local Storage
- Subscribed State UI change after reloading the page according to submitted email
- Save feature of input value after reloading the page through Local Storage
- Backend Node.js and Express.js
- Fecth requests to backend
- Community section receives data from backend
- After pushing "Subscribe" button valid email is sent and written in backend JSON
- After pushing "USubscribe" button valid email is deleted in backend JSON
- 'forbidden@gmail.com' is set as an email already exists in backend data
- Unit Tests for email validation of 3 types of function including Async performed with **Mocha**, **Chai**, **Sinon** libraries
- User Events sending to backend analytics server implemented with **WebWorker**
- Performance Measurements of fetching Community Section and Layout page are sent to backend performance analytics JSON

#### The history of the whole development performed on Gitlab by division for several steps:
1) https://gitlab.com/rleydev/html-essentials-hometask
2) https://gitlab.com/rleydev/css-basic-hometask
3) https://gitlab.com/rleydev/css-selectors-and-responsive
4) https://gitlab.com/rleydev/css-flex-grid-hometask
5) https://gitlab.com/rleydev/css-transforms-and-transitions
6) https://gitlab.com/rleydev/css-animations
7) https://gitlab.com/rleydev/css-preprocessors
8) https://gitlab.com/rleydev/mastering-javascript-events

### Notes
- Production build and hosted in gh-pages in branch **gh-pages**
- Original CSS styling implemented in **general_css** branch
- SASS in scss, Vanilla Js section and Webpack is developed in **saas_project** branch and merged into **develop** branch
- Factory pattern, local storage Join Program section UI update based on email validation and subscribtion and other devdeloped in **addit-dev** branch

### Deploy for frontend landing review without SERVER dependancy elements: https://rleydev.github.io/startup-template-web/