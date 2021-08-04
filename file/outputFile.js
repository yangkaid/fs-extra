const fs = require('fs-extra')

/* 
几乎与writeFile（即它覆盖）相同，除了如果父目录不存在，则创建它。file必须是文件路径（不允许使用缓冲区或文件描述符）。

file 写入文件路径
data 写入文件的数据
options

encoding  |  默认为 'utf8'
mode  默认为 0o666
flag  详见支持的文件系统flag, 默认为 'w'
*/
let file1 = './testdemo/test/inner.txt'
/* fs.outputFile(file1, 'hello')
.then(() => fs.readFile(file1),'utf8')
.then( data => {
    console.log(data);
})
.catch( err => {
    console.log(err);
}) */

async function outputFile(path) {
    try {
        let str = '阿克苏饭卡首府拉萨发哈桑十分士大夫地方'
        await fs.outputFile(path, str)
        const data = await fs.readFile(path, 'utf8')
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
outputFile(file1)