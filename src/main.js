import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'

import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faBars, faTwitter, faFacebook, faInstagram, faYoutube, faClose)

import './assets/main.css'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')