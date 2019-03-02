Vue.component('washing-symbol', {
  props: ['description'],
  template: `
    <div class='washing-symbol'>
      <div>Some Image</div>
      <div>{{ description }}</div>
    </div>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
