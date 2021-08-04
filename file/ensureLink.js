const fs = require('fs-extra')

let srcpath = './myfile.txt'
let dstpath = './linkfile.txt'
// 如果在一个文件中进行了任何更改，它将反映在另一个文件中。这就是我们可以使用ensureFile()函数的方式
fs.ensureLink(srcpath,dstpath)
.then(() => {
    console.log('两个文件连接成功');
})
.catch((err) => {
    console.log(err);
})