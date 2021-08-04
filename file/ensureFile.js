const fs = require('fs-extra')

fs.ensureFile('./haha.js')
.then(() => {
    console.log('这个文件是存在的');
})
.catch((err) => {
    console.log('这个文件不存在');
})


async function ensureFile(path) {
    try {
        await ensureFile(path)
        console.log('这个文件是存在的');
    } catch (error) {
        console.log(error);
    }
}