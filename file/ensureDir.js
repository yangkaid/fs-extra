const fs = require('fs-extra')

fs.ensureDir('./test123123')
.then(() => {
    console.log('这个目录是存在的');
})
.catch((err) => {
    console.log(err);
})