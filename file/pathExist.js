const fs = require('fs-extra')

let path = './file2'

fs.pathExists(path)
.then(exists => console.log(exists))