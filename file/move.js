const fs = require('fs-extra')
let srcpath = './mymovefile.txt'
let despath = './testdemo/test/inner.txt'
// fs.move(srcpath,despath, {
//     overwrite: false
// })
// .then(() => {
//     console.log('move成功');
// })
// .catch((err) => {
//     console.log(err);
// })

//移动文件或目录，如果目录不存在就新建目录
async function move(srcpath,despath) {
    try {
        await fs.move(srcpath,despath)
        console.log('文件移动成功');
    } catch (error) {
        console.log(error);
    }
}
move(srcpath,despath)