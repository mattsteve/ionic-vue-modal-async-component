import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './app.vue';

import '@ionic/core/css/ionic.bundle.css';

import components from './components/components.plugin';

const app = createApp(App);
app.use(IonicVue);
app.use(components);
app.mount('#app');
