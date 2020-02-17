import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Modal from './components/Modal.vue';

Vue.component('modal', Modal);

Vue.use(vueCustomElement);

const customElementOptions = {
  shadow: true,
};
const load = (loader) => async () => (await loader()).default;
Vue.config.ignoredElements = ['adaptive-card'];
Vue.customElement('adaptive-card', load(() => import('./components/AdaptiveCards.vue')), customElementOptions);
