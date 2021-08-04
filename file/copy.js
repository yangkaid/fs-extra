const fs = require('fs-extra')

// fs.copy('./myfile.txt', './mynewfile.txt')
//     .then(() => {
//         console.log('成功复制');
//     })
//     .catch((err) => {
//         console.log(err);
//     })



async function copy() {
    try {
        await fs.copy('./myfile.txt', './mynewfile.txt')
        console.log('复制成功');
    } catch (error) {
        console.log(error);
    }
}
copy()

// options

// overwrite : 覆盖现有文件或目录，默认为true。请注意，如果将此设置为false并且目标存在，则复制操作将无提示失败。使用该errorOnExist选项可更改此行为。
// errorOnExist : 当overwrite为false和目标存在时，抛出错误。默认是false。
// dereference : dereference symlinks，默认是false。
// preserveTimestamps : 如果为true，将设置对原始源文件的最后修改和访问时间。如果为false，则时间戳行为取决于操作系统。默认是false。
// filter : 过滤复制文件的功能。返回true包含，false排除。也可以返回Promise解析为true或false（或传入async函数）。