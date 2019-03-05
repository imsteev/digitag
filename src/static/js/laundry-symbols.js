const ASSETS_FOLDER = './static/assets/'

// washing
const washing = {
  MACHINE: {'description': 'Machine wash', 'url': ASSETS_FOLDER + '/machine-wash.svg'},
  HAND: {'description': 'Hand wash', 'url': ASSETS_FOLDER + '/hand-wash.svg'},
  DONT: {'description': 'Do not wash', 'url': ASSETS_FOLDER + '/dont-wash.svg'},
  DRY_CLEAN: {'description': 'Dry clean only', 'url': ASSETS_FOLDER + '/dry-clean.svg'},
  DONT_DRY_CLEAN: {'description': 'Do not dry clean', 'url': ASSETS_FOLDER + '/dont-dry-clean.svg'}
}

const washingTemps = {
  COLD: {'description': 'Wash cold', 'min': '65F', 'max': '85F', 'url': ASSETS_FOLDER + '/wash-temp-1.svg'},
  WARM: {'description': 'Wash warm', 'min': '85F', 'max': '105F', 'url': ASSETS_FOLDER + '/wash-temp-2.svg'},
  HOT: {'description': 'Wash hot', 'min': '105F', 'max': '120F', 'url': ASSETS_FOLDER + '/wash-temp-3.svg'},
}

const washingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'}
}

// drying
const drying = {
  TUMBLE: {'description': 'Tumble drying allowed', 'url': ASSETS_FOLDER + '/tumble-dry.svg'},
  DONT_TUMBLE: {'description': 'Do not tumble dry', 'url': ASSETS_FOLDER + '/dont-tumble-dry.svg'},
  HANG: {'description': 'Hang to dry', 'url': ASSETS_FOLDER + '/line-dry.svg'},
  FLAT: {'description': 'Dry flat', 'url': ASSETS_FOLDER + '/dry-flat.svg'},
  DONT_WRING: {'description': 'Do not wring', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'}
}

const dryingTemps = {
  ANY: {'description': 'Any heat', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  LOW: {'description': 'Low heat', 'url': ASSETS_FOLDER + '/dry-low.svg'},
  MEDIUM: {'description': 'Medium heat', 'url': ASSETS_FOLDER + '/dry-medium.svg'},
  HIGH: {'description': 'High heat', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  NO_HEAT: {'description': 'No heat. Air dry', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'}
}

const dryingCycles = {
  NORMAL: {'description': 'Normal cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  PERMANENT: {'description': 'Permanent press cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
  DELICATE: {'description': 'Delicate/gentle cycle', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'}
}

// other
const bleaching = {
  ALLOWED: {'description': 'Bleaching allowed', 'url': ASSETS_FOLDER + '/bleaching-allowed.svg'},
  DONT: {'description': 'Do not bleach', 'url': ASSETS_FOLDER + '/dont-bleach.svg'},
  NON_CHLORINE: {'description': 'Use non-chlorine bleach', 'url': ASSETS_FOLDER + '/non-chlorine-bleach.svg'},
}

const ironing = {
  LOW: {'description': 'Iron low', 'url': ASSETS_FOLDER + '/iron-low.svg'},
  MEDIUM: {'description': 'Iron medium', 'url': ASSETS_FOLDER + '/iron-medium.svg'},
  HIGH: {'description': 'Iron high', 'url': ASSETS_FOLDER + '/iron-high.svg'},
  DONT: {'description': 'Do not iron', 'url': ASSETS_FOLDER + '/dont-iron.svg'},
  NO_STEAM: {'description': 'No steam added to iron', 'url': ASSETS_FOLDER + '/FILL-IN-FILE.svg'},
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