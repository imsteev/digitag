// washing
const washing = {
  MACHINE: {'description': 'Machine wash'},
  HAND: {'description': 'Hand wash'},
  DONT: {'description': 'Do not wash'},
  DRY_CLEAN: {'description': 'Dry clean only'},
  DONT_DRY_CLEAN: {'description': 'Do not dry clean'}
}

const washingTemps = {
  COLD: {'description': 'Wash cold', 'min': '65F', 'max': '85F'},
  WARM: {'description': 'Wash warm', 'min': '85F', 'max': '105F'},
  HOT: {'description': 'Wash hot', 'min': '105F', 'max': '120F'},
}

const washingCycles = {
  NORMAL: {'description': 'Normal cycle'},
  PERMANENT: {'description': 'Permanent press cycle'},
  DELICATE: {'description': 'Delicate/gentle cycle'}
}

// drying
const drying = {
  TUMBLE: {'description': 'Tumble drying allowed'},
  DONT_TUMBLE: {'description': 'Do not tumble dry'},
  HANG: {'description': 'Hang to dry'},
  FLAT: {'description': 'Dry flat'},
  DONT_WRING: {'description': 'Do not wring'}
}

const dryingTemps = {
  ANY: {'description': 'Any heat'},
  LOW: {'description': 'Low heat'},
  MEDIUM: {'description': 'Medium heat'},
  HIGH: {'description': 'High heat'},
  NO_HEAT: {'description': 'No heat. Air dry'}
}

const dryingCycles = {
  NORMAL: {'description': 'Normal cycle'},
  PERMANENT: {'description': 'Permanent press cycle'},
  DELICATE: {'description': 'Delicate/gentle cycle'}
}

// other
const bleaching = {
  ALLOWED: {'description': 'Bleaching allowed'},
  DONT: {'description': 'Do not bleach'},
  NON_CHLORINE: {'description': 'Use non-chlorine bleach'},
}

const ironing = {
  LOW: {'description': 'Iron low'},
  MEDIUM: {'description': 'Iron medium'},
  HIGH: {'description': 'Iron high'},
  DONT: {'description': 'Do not iron'},
  NO_STEAM: {'description': 'No steam added to iron'},
}

Vue.component('washing-symbol', {
  props: ['symbol'],
  template: `
    <div class='washing-symbol'>
      <div>{{ symbol.description }}</div>
    </div>
  `
});

let app = new Vue({
  el: '#app',
  data: {
    symbols: [
      Object.assign({'url': './wash.svg' }, washing.MACHINE)
    ]
  }
});
