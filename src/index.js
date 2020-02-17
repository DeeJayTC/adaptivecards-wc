import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import Modal from './components/Modal.vue';
Vue.component('modal', Modal);

Vue.use(vueCustomElement);

const customElementOptions = {
  shadow: true,
  shadowCss: `
      .root{
          all: initial;
          font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 13px;
          -webkit-font-smoothing: antialiased;
      }

      a{
          text-decoration: none;
          color: unset;
      }
      a:hover{
          color: #63a9f9;
      }
      `,
};
const load = (loader) => async () => (await loader()).default;
Vue.config.ignoredElements = ['adaptive-card'];
Vue.customElement('adaptive-card', load(() => import('./components/AdaptiveCards.vue')), customElementOptions);
