const GRIMACING = '&#128556'
const SLIGHTLY_SMILING = '&#128578'

Vue.component('washing-symbol', {
  props: ['symbol'],
  data() {
    return {
      selected: GRIMACING,
      style: {'cursor': 'pointer;'}
    }
  },
  methods: {
    toggle: function() {
      // NOTE: `this` refers to this Vue component!
      this.selected = (this.selected === GRIMACING) ? SLIGHTLY_SMILING : GRIMACING;
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
  },
  methods: {
    summarize: function () {
      let allSelected = this.$children.filter((v) => v.selected == SLIGHTLY_SMILING)
      let instructions = allSelected.map((v) => v.symbol.description);
      console.log(instructions)
    }
  }
});
