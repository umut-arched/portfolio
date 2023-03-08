import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faYoutube, faTwitter, faGithub, faBehance, faVuejs, faJava } from "@fortawesome/free-brands-svg-icons";


library.add(faYoutube, faTwitter, faGithub, faBehance, faVuejs, faJava)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
