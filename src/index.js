import './assets/styles/app.scss'
import './index.hbs'
import './profile.hbs'


import './assets/images/menu-24px.svg'
import './assets/images/more_horiz-24px.svg'
import './assets/images/notifications-24px.svg'
import './assets/images/offline_bolt-24px.svg'
import './assets/images/portrait1.jpg'
import './assets/images/search-24px.svg'
import './assets/images/all_inclusive-24px.svg'
import './assets/images/ballot-24px.svg'
import './assets/images/bar_chart-24px.svg'
import './assets/images/build-24px.svg'
import './assets/images/card_giftcard-24px.svg'
import './assets/images/amazon.png'
import './assets/images/green-circle.png'
import './assets/images/orange-circle.png'
import './assets/images/violet-circle.png'

document.querySelector('[data-toggle]').addEventListener('click', function (event) {
    event.preventDefault();
    let element = event.target.dataset.toggle;

    document.querySelectorAll('[data-' + element + ']').forEach(function (el) {
        el.classList.toggle(element + '__hide');
    })
});