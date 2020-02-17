<template>
  <div class='light' />
</template>

<script>
import * as AdaptiveCards from 'adaptivecards/dist/adaptivecards';
import { Template, EvaluationContext } from 'adaptivecards-templating/dist/adaptivecards-templating';
import SampleCard from '../assets/emptyCard.json'
import lightConfig from '../assets/lightConfig.json'
import darkConfig from '../assets/darkConfig.json'
import * as d3 from 'd3-fetch'
export default {
  name: 'AdaptiveCard',
  props: {
    data: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Object | String,
      required: false,
      default: null,
    },
    height:String,
    width:String,
    useTemplating: Boolean,
    showModal: Boolean,
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
    mode: {
      type: String,
      required: false,
      default: 'light'
    }
  },
  data() {
    return {
      cardHolder: null,
      cardRemoteTemplate: null,
    };
  },
  computed: {
    cardParsed() {
      if(this.src !== '' && this.card != null && this.card != ''){
        throw new SyntaxError('Please only use src or card, never both!');
        return;
      }
      if(this.useTemplating && ( this.data == null || this.data === '' )){
        throw new SyntaxError('Data must be passed when using templating');
        return;
      }

      if(this.src === '' && this.card == null || this.card === ''){
        return SampleCard;
      }

      // Try to load from url
      if(this.validURL(this.src)){
        fetch(this.src, {
          mode:'no-cors'
        }).then(function(response) {
            if (response.type === 'opaque' || response.ok) {
              console.log(response)
            } else {
              console.log(response)
            }
        });
      }

     // if (this.cardRemoteTemplate != null) return this.cardRemoteTemplate;
     // return typeof this.src === 'Object' ? JSON.stringify(this.card) : this.src;
    },
    dataParsed() {
      return this.data != null && this.data != undefined && typeof this.data === 'Object' ? JSON.stringify(this.data) : this.data;
    },
    configParsed() {
      return this.mode === 'light' ? lightConfig : darkConfig;
    }

  },
  mounted() {
    console.log(this.data);
    console.log(this.cardParsed);
    console.log(this.dataParsed);
    console.log(this.options);
    console.log(this.config);
    this.renderCard();
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
      try{
      this.cardHolder = new AdaptiveCards.AdaptiveCard();
      // Use Default Host Config if not passed
      this.cardHolder.HostConfig = this.configParsed;

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
        this.cardHolder.parse(this.cardParsed);
      }

      this.cardHolder.onExecuteAction = (action) => {
        this.$emit('onActionClicked', action, action.data);
      };

      this.cardElement = this.cardHolder.render();
      this.$el.innerHTML = '';
      this.$el.appendChild(this.cardElement);
      if(this.width != '') this.$el.style.width = `${this.width}`;
      if(this.height != '') this.$el.style.height = `${this.height}`;
      }
      catch (ex) {
        throw new Error('Could not render card: ' + ex);
      }

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

<style scoped>

 .ac-media-poster {}

 .ac-media-poster .empty {
    height: 200px;
    background-color: #F2F2F2;
}

 .th, td  {
    border:none !important;
}

 .ac-fact-title,
 .ac-fact-value{
    border: none !important;
}

 .ac-media-playButton {
    width: 56px;
    height: 56px;
    border: 1px solid #EEEEEE;
    border-radius: 28px;
    box-shadow: 0px 0px 10px #EEEEEE;
    background-color: rgba(255, 255, 255, 0 .9);
    color: black;
    cursor: pointer;
}

 .ac-media-playButton-arrow {
    color: black;
}

 .ac-media-playButton:hover {
    background-color: white;
}

 .ac-image .ac-selectable {
    cursor: pointer;
}

 .ac-image .ac-selectable:hover {
    background-color: rgba(0, 0, 0, 0 .1);
}

 .ac-image .ac-selectable:active {
    background-color: rgba(0, 0, 0, 0 .15);
}

a .ac-anchor {
    text-decoration: none;
}

a .ac-anchor:link {
    color: #6264A7;
}

a .ac-anchor:visited {
    color: #6264A7;
}

a .ac-anchor:link:active {
    color: #6264A7;
}

a .ac-anchor:visited:active {
    color: #6264A7;
}

 .ac-container .ac-selectable,  .ac-columnSet .ac-selectable {
    padding: 0px;
}

 .ac-container th{
    border:none !important;
}

 .ac-container th,td{
    border:none !important;
}

 .ac-container tr{
    border:none !important;
}

 .ac-container .ac-selectable:hover,  .ac-columnSet .ac-selectable:hover {
    background-color: rgba(0, 0, 0, 0 .1) !important;
}

 .ac-container .ac-selectable:active,  .ac-columnSet .ac-selectable:active {
    background-color: rgba(0, 0, 0, 0 .15) !important;
}

 .ac-pushButton {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: default;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    padding: 4px 10px 5px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 32px;
    background-color: white;
    color: #6264A7;
    border: 2px solid #BFC0DA;
    border-radius: 4px;
}

 .ac-pushButton:hover {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

 .ac-pushButton:active {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

 .ac-pushButton .expanded {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

 .ac-pushButton .style-emphasis {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

 .ac-input {
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    color: black;
}

 .ac-input .ac-input-required {
    background-image: linear-gradient(45deg, transparent, transparent 50%, red 50%, red 100%);
    background-position: top right;
    background-size:  .5em  .5em;
    background-repeat: no-repeat;
}

 .ac-input .ac-input-validation-failed {
    border: 1px solid red !important;
}

 .ac-input .ac-textInput {
    resize: none;
}

 .ac-input .ac-textInput .ac-multiline {
    height: 72px;
}

 .ac-input .ac-textInput,  .ac-input .ac-numberInput,  .ac-input .ac-dateInput,  .ac-input .ac-timeInput {
    height: 31px;
}

 .ac-input .ac-textInput,  .ac-input .ac-numberInput,  .ac-input .ac-dateInput,  .ac-input .ac-timeInput,  .ac-input .ac-multichoiceInput {
    background-color: #F3F2F1;
    border: 1px solid #F3F2F1;
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
}

/* ac-inlineActionButton should set height to the same as ac-input .ac-textInput */

 .ac-inlineActionButton {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: none;
    background-color: transparent;
    height: 31px;
}

 .ac-inlineActionButton .textOnly {
    padding: 0 8px;
}

 .ac-inlineActionButton .iconOnly {
    padding: 0;
}

 .ac-inlineActionButton:hover {
    background-color: #EEEEEE;
}

 .ac-inlineActionButton:active {
    background-color: #CCCCCC;
}
