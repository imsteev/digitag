const GRIMACING = '&#128556'
const SLIGHT_SMILING = '&#128578'

Vue.component('washing-symbol', {
  props: ['symbol'],
  data() {
    return {
      selected: '&#128578',
      style: {'cursor': 'pointer;'}
    }
  },
  methods: {
    toggle: function() {
      // NOTE: `this` refers to this Vue component!
      this.selected = (this.selected === GRIMACING) ? SLIGHT_SMILING : GRIMACING;
    }
  },
  // component templates should only have one root element, i.e, wrap your stuff
  // in a container if necessary
  template: `
    <div class='washing-symbol center-align'>
      <img class='z-depth-1' 
           v-bind:src=symbol.url
           v-on:click="toggle()"
           width="64px"
           height="64px"
           style="cursor: pointer;"/>
      <p v-html="selected"></p>
    </div>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    symbols: allSymbols.map((symbol, i) => Object.assign(symbol, {'id': i}))
  }
});
