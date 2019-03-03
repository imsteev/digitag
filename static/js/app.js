Vue.component('washing-symbol', {
  props: ['symbol'],
  data() {
    return {
      selected: false,
      style: {'cursor': 'pointer;'}
    }
  },
  template: `
    <div class='washing-symbol'>
      <img v-bind:src=symbol.url width="64px" height="64px" style="cursor: pointer;"/>
      <div>{{ symbol.description }}</div>
    </div>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    symbols: allSymbols.map((symbol, i) => Object.assign(symbol, {'id': i}))
  }
});
