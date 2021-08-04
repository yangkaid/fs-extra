const fs = require('fs')
const fse = require('fs-extra')
let routerPath = './routes.js'
fse.ensureFile(routerPath)