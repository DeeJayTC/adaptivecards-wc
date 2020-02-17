<template>
  <div id="cardHolder" />
</template>
<style scoped lang="scss">
@import '../scss/adaptive-card';
</style>

<script>
import * as AdaptiveCards from 'adaptivecards/dist/adaptivecards';
import { Template, EvaluationContext } from 'adaptivecards-templating/dist/adaptivecards-templating';
import axios from 'axios';
import HostConfig from '../assets/exampleHostConfig.json';

export default {
  name: 'AdaptiveCard',
  props: {
    data: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String,
      required: false,
      default: null,
    },
    options: {
      type: Object | String,
      required: false,
      default() {
        return {
          useTemplating: false
        }
      },
    },
    card: {
      type: Object | String,
      required: false,
      default: null,
    },
    src: {
      type: String,
      required: false,
      default: '',
    },
    config: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      cardHolder: null,
      cardRemoteTemplate: null,
    };
  },
  computed: {
    cardParsed() {
      if (this.cardRemoteTemplate != null) return this.cardRemoteTemplate;
      return typeof this.src === 'Object' ? JSON.stringify(this.card) : this.src;
    },
    dataParsed() {
      return typeof this.data === 'Object' ? JSON.stringify(this.data) : this.data;
    },
  },
  mounted() {
    // Check a few things first
    if(this.src !== '' && this.card != null && this.card != ''){
      throw 'Please only use src or card, never both!';
      return;
    }


    console.log(typeof this.src);
    console.log(typeof this.config);
    // Check type of src
    if(this.src.type === Object) {
      console.log("CardObject ->" + this.src)
    } else{
      var valid = this.validURL(this.src);
      console.log('Source valid -> ' + valid)
      console.log(this.src);
    }

    console.log(this.config.type);
    if(this.config.type === Object) {
      console.log("CardObject ->" + this.config)
    } else {
      var valid = this.validURL(this.config);
      console.log('Config valid -> ' + valid)
      console.log(this.config);
    }

    console.log(this.data);
    console.log(this.options);
    //this.renderCard();
  },
  methods: {
    validURL(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    },
    renderCard() {
      const instance = axios.create({
        paramsSerializer(params) {
          return stringify(params, { arrayFormat: 'brackets' });
        },
      });

      // Load the card from url if passed
      if (this.src != '') {
        const json = axios.get(this.src).then((data) => {
          if (data.status == 200) {
            this.cardRemoteTemplate = JSON.stringify(data.data);
            console.log(this.cardRemoteTemplate);
          }
        });
      }
      this.cardHolder = new AdaptiveCards.AdaptiveCard();
      // Use Default Host Config if not passed
      this.cardHolder.HostConfig = this.hostConfig == '' ? JSON.stringify(HostConfig) : this.hostConfig;

      if (this.useTemplating && this.data == null) {
        this.$el.remove();
        throw new Error('When using templating data is required');
      }

      if (this.useTemplating && this.data != null) {
        const template = new Template(this.cardParsed);
        const context = new EvaluationContext();
        context.$root = this.dataParsed;
        var cardToRender = template.expand(context);

        this.cardHolder.parse(cardToRender);
      } else {
        this.cardHolder.parse(cardToRender);
      }

      this.cardHolder.onExecuteAction = (action) => {
        this.$emit('onActionClicked', action, action.data);
      };

      this.cardElement = this.cardHolder.render();
      var el = document.getElementById('cardHolder');
      el.innerHTML = '';
      el.appendChild(this.cardElement);
    },
  },
  watch: {
    data: {
      handler(n, o) {
        this.renderCard();
      },
      deep: true,
    },
    card: {
      handler(n, o) {
        this.renderCard();
      },
      deep: true,
    },
  }
};

</script>
