import ifymarket from '../images/ifymarket.png';
import airbnb from '../images/airbnb.png';
import globtopus from '../images/globtopus.png';
import md from '../images/md.png';
import wuh from '../images/wuh.jpg'
import sjt from '../images/sjt.jpg'
import mflix from '../images/mflix.jpg'
export const portfolio_details = [
    {
        title: 'mkFlix',
        description: 'WORK IN PROGRESS! Find your favourite movie and read all about it...;-)',
        url: 'https://mk-flix.herokuapp.com',
        technologies: 'Reactjs, Python/Flask, MongoDB, Firebase, HTML, CSS, Javascript,',
        image: mflix,
        features: ['Searching for your favourite movie',
            'and read all about it...;-)',
           ]
    },
    {
        title: 'ifyMARKET.com',
        description: 'A marketplace for local ' +
            'producers, suppliers, growers to sell online.',
        url: 'https://www.ifymarket.com/business/',
        technologies: 'Python, Flask, MongoDB, Heroku, Firebase, Nginx, HTML, Stripe, CSS, Javascript, jQuery, leaflet.js...',
        image: ifymarket,
        features: [
            'CMS with fully featured online store',
            'Stripe connected account for businesses to accept online payments on the platform',
            'Multiple team members access, several access levels',
            'Assigning orders directly on the orders map',
            '...'
        ]
    },
    {
        title: 'Demo airbnb',
        description: 'Full-Stack demo booking application ',
        url: 'https://mk-react-flask.herokuapp.com',
        technologies: 'Reactjs, Python/Flask, MongoDB, Firebase, HTML, CSS, Javascript,',
        image: airbnb,
        features: ['Searching for the perfect room',
            'Booking the room',
            'Preview of my bookings']
    },
    {
        title: 'globtopus.com',
        description: 'How are you today?',
        url: 'http://www.globtopus.com',
        technologies: 'Python, Flask, MongoDB, Javascript, HTML, CSS, jQuery',
        image: globtopus,
        features: ['A study project from CodeInstitute',
            'Attempt to find out how does the world feel...;-)',
            'Currently under re-development']
    },
    {
        title: 'Web studio',
        description: 'A prototype app for a web studio',
        url: 'https://marcelli.herokuapp.com',
        technologies: 'Python, Django, Postgres, Javascript, HTML, CSS, jQuery',
        image: md,
        features: ['A study project from CodeInstitute',
            'A user can schedule free consultation',
            'A freelancer can sign-up',
            'A freelancer can communicate with client through the website a share a development link' +
            'of a project with a client.']
    },
    {
        title: 'Wake up happy',
        description: 'A booking site, where customers can find rooms with the view...',
        url: 'https://marcelkolarcik.github.io/wake-up-happy/index.html',
        technologies: 'Javascript, HTML, CSS, jQuery',
        image: wuh,
        features: ['A study project from CodeInstitute',
            'Owners can:' +
            ' - add their rooms onto the site, using our 5 step method, with visual and written ',
            ' - guides for every step of the journey.',
            ' - log in anytime to see total income and occupancy for the room, and any bookings with customer details.',
            'edit room details or add another room']
    },
    {
        title: 'Simple jQuery translator',
        description: 'Simple jQuery translator, that will translate text, title of element, placeholder of input fields,' +
            ' alt attribute of image.',
        url: 'https://marcelkolarcik.github.io/simple-jQuery-translator/index.html',
        technologies: 'Javascript, HTML, CSS, jQuery',
        image: sjt,
        features: ['A study project from CodeInstitute',]
    },

]
//