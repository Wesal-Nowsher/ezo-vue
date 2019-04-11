import "./assets/css/responsive.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome, faMusic,faTv,faTh ,faFile, faTablet,faHeart, faBars,faSearch} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee);
library.add(faHome,faMusic, faTv, faTh, faFile,faTablet, faHeart,faBars, faSearch);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
