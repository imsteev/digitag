// washing
const washing = {
  MACHINE: {'description': 'Machine wash', 'url': './static/assets/machine-wash.svg'},
  HAND: {'description': 'Hand wash', 'url': './static/assets/machine-wash.svg'},
  DONT: {'description': 'Do not wash', 'url': './static/assets/machine-wash.svg'},
  DRY_CLEAN: {'description': 'Dry clean only', 'url': './static/assets/machine-wash.svg'},
  DONT_DRY_CLEAN: {'description': 'Do not dry clean', 'url': './static/assets/machine-wash.svg'}
}

const washingTemps = {
  COLD: {'description': 'Wash cold', 'min': '65F', 'max': '85F', 'url': './static/assets/machine-wash.svg'},
  WARM: {'description': 'Wash warm', 'min': '85F', 'max': '105F', 'url': './static/assets/machine-wash.svg'},
  HOT: {'description': 'Wash hot', 'min': '105F', 'max': '120F', 'url': './static/assets/machine-wash.svg'},
}

const washingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': './static/assets/machine-wash.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': './static/assets/machine-wash.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': './static/assets/machine-wash.svg'}
}

// drying
const drying = {
  TUMBLE: {'description': 'Tumble drying allowed', 'url': './static/assets/machine-wash.svg'},
  DONT_TUMBLE: {'description': 'Do not tumble dry', 'url': './static/assets/machine-wash.svg'},
  HANG: {'description': 'Hang to dry', 'url': './static/assets/machine-wash.svg'},
  FLAT: {'description': 'Dry flat', 'url': './static/assets/machine-wash.svg'},
  DONT_WRING: {'description': 'Do not wring', 'url': './static/assets/machine-wash.svg'}
}

const dryingTemps = {
  ANY: {'description': 'Any heat', 'url': './static/assets/machine-wash.svg'},
  LOW: {'description': 'Low heat', 'url': './static/assets/machine-wash.svg'},
  MEDIUM: {'description': 'Medium heat', 'url': './static/assets/machine-wash.svg'},
  HIGH: {'description': 'High heat', 'url': './static/assets/machine-wash.svg'},
  NO_HEAT: {'description': 'No heat. Air dry', 'url': './static/assets/machine-wash.svg'}
}

const dryingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': './static/assets/machine-wash.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': './static/assets/machine-wash.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': './static/assets/machine-wash.svg'}
}

// other
const bleaching = {
  ALLOWED: {'description': 'Bleaching allowed', 'url': './static/assets/machine-wash.svg'},
  DONT: {'description': 'Do not bleach', 'url': './static/assets/machine-wash.svg'},
  NON_CHLORINE: {'description': 'Use non-chlorine bleach', 'url': './static/assets/machine-wash.svg'},
}

const ironing = {
  LOW: {'description': 'Iron low', 'url': './static/assets/machine-wash.svg'},
  MEDIUM: {'description': 'Iron medium', 'url': './static/assets/machine-wash.svg'},
  HIGH: {'description': 'Iron high', 'url': './static/assets/machine-wash.svg'},
  DONT: {'description': 'Do not iron', 'url': './static/assets/machine-wash.svg'},
  NO_STEAM: {'description': 'No steam added to iron', 'url': './static/assets/machine-wash.svg'},
}

let allSymbols = Object.values(washing)
  .concat(Object.values(washingTemps))
  .concat(Object.values(washingCycles))
  .concat(Object.values(drying))
  .concat(Object.values(dryingTemps))
  .concat(Object.values(dryingCycles))
  .concat(Object.values(bleaching))
  .concat(Object.values(ironing))