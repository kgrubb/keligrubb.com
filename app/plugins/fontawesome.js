import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
  faMastodon, 
  faTwitch, 
  faLinkedin, 
  faSoundcloud 
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

// Only add the icons you actually use
library.add(faMastodon, faTwitch, faLinkedin, faSoundcloud);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
