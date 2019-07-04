const LOG_EVENT = (eventName) => console.log('EVENT: ' + eventName)

// event names
const RESET_SYMBOLS = 'reset-symbols'
const NEW_SYMBOL = 'new-symbol'

let QRCODE = null;;

let WashingSymbol = Vue.component('washing-symbol', {
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
  created: function () {
    EventBus.$on(RESET_SYMBOLS, function() {
        LOG_EVENT(RESET_SYMBOLS)
        this.selected = false;
    }.bind(this)) // https://stackoverflow.com/a/39707563/8109239
  },
  methods: {
    toggle: function() {
      // NOTE: `this` refers to this Vue component!
      this.selected = !this.selected
      console.log(this.slot, this.$slot)
    }
  },
  // component templates should only have one root element, i.e, wrap your stuff
  // in a container if necessary
  template: `
    <div class='washing-symbol' v-bind:alt=symbol.description>
      <img class='z-depth-1'
           v-bind:src=symbol.url
           v-bind:style="imgStyle"
           v-on:click="toggle()"/>
      <slot v-bind:selected="selected"></slot>
    </div>
  `
});

let LaundryTag = Vue.component('laundry-tag', {
  components: {
    'washing-symbol': WashingSymbol
  },
  data() {
    return {
      symbols: []
    }
  },
  created: function () {
    EventBus.$on(NEW_SYMBOL, function(symbols) {
      this.symbols = symbols
    }.bind(this))
  },
  template: `
    <div class='laundry-tag'>
      <washing-symbol
        v-for="symbol in symbols"
        v-bind:symbol="symbol"></washing-symbol>
      <div id="qrcode"></div>
    </div>
  `
})

let app = new Vue({
  el: '#app',
  data: {
    // https://vuejs.org/v2/guide/list.html#key
    symbols: allSymbols.map((symbol, i) => Object.assign(symbol, {'id': i}))
  },
  methods: {
    summarize: function () {
      let selectedSymbols = this.$children.filter(v => v.selected)
        .map(v => ({description: v.symbol.description, url: v.symbol.url}))

      if (selectedSymbols.length > 0) {
        EventBus.$emit(NEW_SYMBOL, selectedSymbols);
      }
      QRCODE = new QRCode(document.getElementById("qrcode"), {
        text: "http://jindo.dev.naver.com/collie",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    },
    reset: function () {
      if (QRCODE) {
        document.getElementById("qrcode").innerHTML = ""
      }
      EventBus.$emit(RESET_SYMBOLS)
    }
  }
});
