// washing
const washing = {
  MACHINE: {'description': 'Machine wash', 'url': './static/assets/machine-wash.svg'},
  HAND: {'description': 'Hand wash', 'url': './static/assets/hand-wash.svg'},
  DONT: {'description': 'Do not wash', 'url': './static/assets/dont-wash.svg'},
  DRY_CLEAN: {'description': 'Dry clean only', 'url': './static/assets/dry-clean.svg'},
  DONT_DRY_CLEAN: {'description': 'Do not dry clean', 'url': './static/assets/dont-dry-clean.svg'}
}

const washingTemps = {
  COLD: {'description': 'Wash cold', 'min': '65F', 'max': '85F', 'url': './static/assets/wash-temp-1.svg'},
  WARM: {'description': 'Wash warm', 'min': '85F', 'max': '105F', 'url': './static/assets/wash-temp-2.svg'},
  HOT: {'description': 'Wash hot', 'min': '105F', 'max': '120F', 'url': './static/assets/wash-temp-3.svg'},
}

const washingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': './static/assets/FILL-IN-FILE.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': './static/assets/FILL-IN-FILE.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': './static/assets/FILL-IN-FILE.svg'}
}

// drying
const drying = {
  TUMBLE: {'description': 'Tumble drying allowed', 'url': './static/assets/tumble-dry.svg'},
  DONT_TUMBLE: {'description': 'Do not tumble dry', 'url': './static/assets/dont-tumble-dry.svg'},
  HANG: {'description': 'Hang to dry', 'url': './static/assets/line-dry.svg'},
  FLAT: {'description': 'Dry flat', 'url': './static/assets/dry-flat.svg'},
  DONT_WRING: {'description': 'Do not wring', 'url': './static/assets/FILL-IN-FILE.svg'}
}

const dryingTemps = {
  ANY: {'description': 'Any heat', 'url': './static/assets/FILL-IN-FILE.svg'},
  LOW: {'description': 'Low heat', 'url': './static/assets/dry-low.svg'},
  MEDIUM: {'description': 'Medium heat', 'url': './static/assets/dry-medium.svg'},
  HIGH: {'description': 'High heat', 'url': './static/assets/FILL-IN-FILE.svg'},
  NO_HEAT: {'description': 'No heat. Air dry', 'url': './static/assets/FILL-IN-FILE.svg'}
}

const dryingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': './static/assets/FILL-IN-FILE.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': './static/assets/FILL-IN-FILE.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': './static/assets/FILL-IN-FILE.svg'}
}

// other
const bleaching = {
  ALLOWED: {'description': 'Bleaching allowed', 'url': './static/assets/bleaching-allowed.svg'},
  DONT: {'description': 'Do not bleach', 'url': './static/assets/dont-bleach.svg'},
  NON_CHLORINE: {'description': 'Use non-chlorine bleach', 'url': './static/assets/non-chlorine-bleach.svg'},
}

const ironing = {
  LOW: {'description': 'Iron low', 'url': './static/assets/iron-low.svg'},
  MEDIUM: {'description': 'Iron medium', 'url': './static/assets/iron-medium.svg'},
  HIGH: {'description': 'Iron high', 'url': './static/assets/iron-high.svg'},
  DONT: {'description': 'Do not iron', 'url': './static/assets/dont-iron.svg'},
  NO_STEAM: {'description': 'No steam added to iron', 'url': './static/assets/FILL-IN-FILE.svg'},
}

let allSymbols = [
  washing.MACHINE,
  washing.HAND,
  washing.DONT,
  washing.DRY_CLEAN,
  washing.DONT_DRY_CLEAN,
  washingTemps.COLD,
  washingTemps.WARM,
  washingTemps.HOT,
  washingCycles.NORMAL,
  washingCycles.PERMANENT,
  washingCycles.DELICATE,
  drying.TUMBLE,
  drying.DONT_TUMBLE,
  drying.HANG,
  drying.FLAT,
  drying.DONT_WRING,
  dryingTemps.ANY,
  dryingTemps.LOW,
  dryingTemps.MEDIUM,
  dryingTemps.HIGH,
  dryingTemps.NO_HEAT,
  dryingCycles.NORMAL,
  dryingCycles.PERMANENT,
  dryingCycles.DELICATE,
  bleaching.ALLOWED,
  bleaching.DONT,
  bleaching.NON_CHLORINE,
  ironing.LOW,
  ironing.MEDIUM,
  ironing.HIGH,
  ironing.DONT,
  ironing.NO_STEAM
].filter((symbol, i) => !symbol.url.endsWith('FILL-IN-FILE.svg'))