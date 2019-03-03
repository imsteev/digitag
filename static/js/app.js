Vue.component('washing-symbol', {
  props: ['symbol'],
  data() {
    return {
      selected: false,
      imgStyle: {
        cursor: 'pointer',
        width: '64px',
        height: '64px',
      }
    }
  },
  methods: {
    toggle: function() {
      // NOTE: `this` refers to this Vue component!
      this.selected = !this.selected
    }
  },
  // component templates should only have one root element, i.e, wrap your stuff
  // in a container if necessary
  template: `
    <div class='washing-symbol center-align'>
      <img class='z-depth-1' 
           v-bind:src=symbol.url
           v-bind:style="imgStyle"
           v-on:click="toggle()"/>
      <p v-if="selected">✅</p>
      <p v-else>❌</p>
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
      let allSelected = this.$children.filter((v) => v.selected)
      let instructions = allSelected.map((v) => v.symbol.description);
      console.log(instructions)
    }
  }
});
