Vue.component('washing-symbol', {
  props: ['symbol'],
  data() {
    return {
      selected: false,
      style: {'cursor': 'pointer;'}
    }
  },
  template: `
    <div class='washing-symbol center-align'>
      <img class='z-depth-1' v-bind:src=symbol.url width="64px" height="64px" style="cursor: pointer;"/>
      <p>: )</p>
    </div>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    symbols: allSymbols.map((symbol, i) => Object.assign(symbol, {'id': i}))
  },
  methods: {
    toggle: function() {
      console.log('SELF', self)
      console.log('THIS', this)
    }
  }
});
